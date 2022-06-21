import { h, toRaw } from 'vue'
import { ElTable, ElTableColumn } from 'element-plus'
import {
  createElementByChildrenType,
  formatRowDataByKey
} from '../../../src/utils/index'
import { isObject, isFunction, isArray, isString } from '../../../src/utils/is'

export default {
  name: 'PdTable',
  props: {
    columns: {
      type: Array,
      default() {
        return []
      }
    },
    commonColumnOptions: {
      type: Object,
      default() {
        return {}
      }
    },
    nullValueDefault: {
      default: '-'
    }
  },
  data() {
    return {
      globleTableOptions: {}
    }
  },
  components: {},
  methods: {},
  mounted() {},
  render() {
    // 合并默认配置
    const { commonColumnOptions, columns } = this.$props

    // 根据配置项生成元素工具函数
    const createElementByOption = (item, row) => {
      if (typeof item === 'string') return item

      let children = ''

      // table-column 子元素
      switch (true) {
        case isObject(item.children):
          children = createElementByOption(item.children)
          break
        case isArray(item.children):
          children = item.children.map((childrenItem) =>
            createElementByOption(childrenItem)
          )
          break
        case isString(item.children):
          children = item.children
          break
        default:
      }

      const { elName, attrs, childrenType } = item
      const childrenProps = isFunction(attrs) ? attrs(row) : attrs

      if (childrenType && isString(childrenType)) {
        return createElementByChildrenType(item, row)
      }

      return h(
        elName,
        {
          ...childrenProps
        },
        ()=>children
      )
    }

    // 根据配置创建 table column children
    const crateChildrenElement = (column, props) => {
      const { children } = column
      const row = toRaw(props.row)

      if (!children) {
        return ''
      }

      // 根据配置项类型(最外层配置)创建元素
      switch (true) {
        case isFunction(children):
          return createElementByOption(children(row), row, column)
        case isArray(children):
          return children.map((item) =>
            createElementByOption(item, row, column)
          )
        case isObject(children):
          return createElementByOption(children, row, column)
        default:
      }

      throw new Error('slots must array , object , function')
    }

    // 创建作用域插槽
    const createTableColumnChildren = (column) => {
      const slotObj = {}

      // 如果有 children 配置项
      if (column.children) {
        slotObj.default = (props) => crateChildrenElement(column, props)
      }
      // 如果是插槽
      else if (column.slotName) {
        const slot = this.$slots[column.slotName]
        if (slot) {
          slotObj.default = (props) => slot(props)
        }
      } else if (column.prop) {
        slotObj.default = ({ row }) => {
          let value = formatRowDataByKey(column.prop, row)
          value = value ? value : this.nullValueDefault
          if (column.formatter && isFunction(column.formatter)) {
            value = column.formatter(value)
          }

          return value + (column.unit ? column.unit : '')
        }
      }
      // 表头名字
      if (column.header) {
        if (isString(column.header)) {
          const headerSlot = this.$slots[column.header]
          if (headerSlot) {
            slotObj.header = () => headerSlot()
          } else {
            slotObj.header = () => column.header
          }
        }
      }

      return slotObj
    }

    // 创建列
    const createTableColumn = () => {
      if (isArray(columns)) {
        return columns.map((column) => {
          const {
            children,
            childrenType,
            slotName,
            formatter,
            unit,
            header,
            ...props
          } = column

          return h(
            ElTableColumn,
            {
              ...commonColumnOptions,
              ...props,
              key: column.prop
            },
            createTableColumnChildren({
              children,
              slotName,
              formatter,
              unit,
              header,
              childrenType,
              prop: column.prop
            })
          )
        })
      }
      return []
    }

    return h(
      ElTable,
      {
        ...this.globleTableOptions,
        ...this.$attrs
      },
      ()=> createTableColumn(columns)
    )
  }
}
