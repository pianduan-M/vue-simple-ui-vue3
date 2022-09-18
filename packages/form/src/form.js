import { ref, h, isRef,resolveComponent } from 'vue'
import {
  ElForm,
  ElFormItem,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElInput,
} from 'element-plus'

import { isFunction, isString, isArray } from '../../../src/utils/is'
import { getSelectOptions } from '../../../src/utils'
import defaultProps from './default-props'

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

    return { formRef, validate, validateField ,scrollToField,resetFields,clearValidate}
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
    const createFormItemLabelSlot = (renderLabel) => {
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

      return {}
    }

    // 创建 form item 里的 表单
    const createFormInputs = (item) => {
      const {
        options,
        slotName,
        inputAttrs,
        placeholder,
        type,
        prop,
        inputChildrenComponent
      } = item
      if (slotName) {
        return createSlots(slotName)
      }

      // 如果是 select
      let children = ''
      if (options && isArray(options)) {
       const childrenOptions = getSelectOptions(options,this.selectOptionMap)

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
      if (isString(type)) {
        switch (type) {
          case 'input':
            inputComponent = ElInput
            break
          case 'select':
            inputComponent = ElSelect
            break
          default:
            inputComponent = resolveComponent(type)
        }
      } else {
        inputComponent = type
      }

      if (!inputComponent) return ''
      return {
        default: () =>
          h(
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
      }
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
              type,
              options,
              renderLabel,
              isHidden,
              slotName,
              inputAttrs,
              placeholder,
              prop,
              inputChildrenComponent,
              ...formItemProps
            } = item
            const itemLayout = layout ? layout : colLayout

            return h(
              ElCol,
              {
                ...itemLayout,
                key: item.label
              },
              () =>
                h(
                  ElFormItem,
                  {
                    ...this.defaultFormItemProps,
                    ...formItemProps,
                    prop
                  },
                  {
                    ...createFormItemLabelSlot(renderLabel),
                    ...createFormInputs({
                      options,
                      renderLabel,
                      isHidden,
                      layout,
                      slotName,
                      inputAttrs,
                      placeholder,
                      type,
                      inputChildrenComponent,
                      prop
                    })
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
        model:this.modelValue,
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
  }
}
