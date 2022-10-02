import { ref, h, isRef, resolveComponent, inject, watch } from 'vue'
import {
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElInput,
  ElTooltip,
} from 'element-plus'
import { QuestionFilled } from '@element-plus/icons-vue'
import { formLabelStyle, formItemContentDescStyle } from './style'

import { isFunction, isString, isArray, isObject } from '../../../src/utils/is'
import { getSelectOptions } from '../../../src/utils'
import defaultProps from './props'

export default {
  name: 'PdForm',

  emit: ['update:modelValue'],
  props: {
    ...defaultProps
  },

  setup() {
    const formRef = ref()
    const validate = () => formRef.value?.validate()
    const validateField = (props) => formRef.value.validateField(props)
    const scrollToField = (props) => formRef.value.scrollToField(props)
    const resetFields = (props) => formRef.value.resetFields(props)
    const clearValidate = (props) => formRef.value.clearValidate(props)


    // 祖先节点 提供一个 dialog 开关标识
    const dialogVisible = inject('dialogVisible')
    watch(dialogVisible, (newVal) => {
      if (!newVal) {
        clearValidate()
      }
    })


    return { formRef, validate, validateField, scrollToField, resetFields, clearValidate }
  },
  watch: {
    // 监听 dialog 关闭 自动清除表单校验
    visible() {
      if (!this.visible && this.autoClearValidate) {
        this.$refs.formRef.clearValidate();
      }
    },
  },
  computed: {

  },

  render() {
    const createSlots = (slotName) => {
      const slots = this.$slots[slotName]
      if (slots) {
        return {
          default: () => slots()
        }
      }
      return ''
    }

    // 创建formItem label
    const createFormItemLabelSlot = (item) => {
      const { renderLabel, label } = item
      // 如果有 form label 渲染函数
      if (renderLabel && isFunction(renderLabel)) {
        return {
          label: (props) => renderLabel(props)
        }
      } else if (renderLabel && isString(renderLabel)) {
        const slot = this.$slots[renderLabel]
        if (slot) {
          return {
            label: () => slot()
          }
        }
      }

      const tooltips = createLabelTooltip(item)
      return {
        label: () => h('span', { style: formLabelStyle }, [label, tooltips])
      }
    }

    // 创建 label tooltips
    const createLabelTooltip = ({ labelTooltip }) => {
      let result
      // eslint-disable-next-line default-case
      switch (true) {
        case isString(labelTooltip):
          result = h(ElTooltip, { effect: 'light', placement: 'top', content: labelTooltip }, h(QuestionFilled, { style: { width: '1em', marginLeft: "8px" } }))
          break;
        case isObject(labelTooltip):
          result = h(ElTooltip, { ...labelTooltip }, QuestionFilled)
          break;
        case isFunction(labelTooltip):
          result = labelTooltip(h)
          break;
      }

      return result
    }

    // 创建 form item 里的 表单
    const createFormInputs = (item) => {
      const {
        options,
        slotName,
        inputAttrs,
        placeholder,
        component,
        prop,
        inputChildrenComponent
      } = item
      if (slotName) {
        return createSlots(slotName)
      }

      // 如果是 select
      let children = ''
      if (options && isArray(options)) {
        const childrenOptions = getSelectOptions(options, this.selectOptionMap)

        children = (isRef(childrenOptions) ? childrenOptions.value : childrenOptions).map((option) =>
          h(inputChildrenComponent ? inputChildrenComponent : ElOption, {
            value: option.value,
            label: option.label,
            key: option.value
          })
        )
      }

      let inputComponent
      // 如果 type 是一个字符串
      if (isString(component)) {
        switch (component) {
          case 'input':
            inputComponent = ElInput
            break
          case 'select':
            inputComponent = ElSelect
            break
          default:
            inputComponent = resolveComponent(component)
        }
      } else {
        inputComponent = component
      }

      if (!inputComponent) return ''
      const inputNode = h(
        inputComponent,
        {
          ...this.defaultInputAttrs,
          modelValue: this.modelValue[item.prop],
          placeholder,
          ...inputAttrs,
          'onUpdate:modelValue': (val) => {
            const formData = { ...this.modelValue }
            formData[prop] = val
            this.$emit('update:modelValue', formData)
          }
        },
        () => children
      )
      const contentDesc = createFormItemContentDesc(item)
      return {
        default: () => [inputNode, contentDesc]

      }
    }

    // 创建 desc 
    const createFormItemContentDesc = ({ desc }) => {
      let result
      // eslint-disable-next-line default-case
      switch (true) {
        case isString(desc):
          result = desc
          break;
        case isFunction(desc):
          result = desc(h)
          break;
      }

      if (result) {
        result = h('div', { class: ['form-item-content__desc'], style: formItemContentDescStyle }, result)
      }

      return result

    }


    const createFormItems = () => {
      const colLayout = { ...this.colLayout }

      let formItems = []
      try {
        formItems = this.formItems
          // 过滤隐藏表单 isHidden 可以是一个函数并且这个函数的 this 是指向 from 的父组件
          .filter((item) => {
            const isHidden = item.isHidden
            if (isFunction(isHidden)) {
              return !isHidden(this.modelValue)
            }
            return !isHidden
          })
          .map((item) => {
            const {
              layout,
              component,
              options,
              renderLabel,
              isHidden,
              slotName,
              inputAttrs,
              placeholder,
              inputChildrenComponent,
              labelTooltip,
              ...formItemProps
            } = item
            const itemLayout = layout ? layout : colLayout

            return h(
              ElCol,
              {
                ...itemLayout,
                key: item.label || item.prop || Date.now()
              },
              () =>
                h(
                  ElFormItem,
                  {
                    ...this.defaultFormItemProps,
                    ...formItemProps,
                    key: item.prop || Date.now()
                  },
                  {
                    ...createFormItemLabelSlot(item),
                    ...createFormInputs(item)
                  }
                )
            )
          })
      } catch (error) {
        throw new Error(error)
      }
      return formItems
    }
    return h(
      ElForm,
      {
        model: this.modelValue,
        ...this.$attrs,
        ref: 'formRef'
      },
      () =>
        h(
          ElRow,
          {
            ...this.rowAttrs
          },
          () => createFormItems()
        )
    )
  },

}
