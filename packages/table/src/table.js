import { h, resolveComponent } from 'vue'
import { createTableColumn } from './table.create'

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
    selectOptionMap: {
      type: Object,
      default() {
        return {}
      }
    },
    nullValueDefault: {
      default: '-'
    },

  },
  data() {
    return {
    }
  },
  components: {  },
  methods: {},
  mounted() { },
  render() {
    // 合并默认配置
    const { commonColumnOptions, columns } = this.$props

    const ElTable = resolveComponent('ElTable')

    if (!ElTable) {
      throw new Error('ElTable must register global component')
    }

    return h(
      ElTable,
      {
        ...this.$attrs
      },
      () => createTableColumn.call(this, columns, commonColumnOptions)
    )
  }
}
