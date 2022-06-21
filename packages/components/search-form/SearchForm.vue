<script>
import { ElSelect, ElOption, ElInput } from 'element-plus'
import { h, resolveComponent, isRef } from 'vue'
import { isString, isObject } from '../../../src/utils/is'
import { getSelectOptions } from '../../../src/utils'
import defaultProps from './default-props'

export default {
  name: 'PdSearchForm',
  props: { ...defaultProps },
  computed: {
    formStyle() {
      if (this.gutter > 0) {
        const gutter = Math.floor(window.parseFloat(this.gutter) / 2)
        return {
          marginLeft: `${-gutter}px`,
          marginRight: `${-gutter}px`
        }
      }
      return {}
    },
    formItemStyle() {
      if (this.gutter > 0) {
        const gutter = Math.floor(window.parseFloat(this.gutter) / 2)

        return {
          paddingLeft: `${gutter}px`,
          paddingRight: `${gutter}px`
        }
      }

      return {}
    }
  },
  render() {
    const createFormItemContentChildren = ({
      type,
      options,
      prop,
      slotName,
      attrs = {}
    }) => {
      if (slotName) {
        const contentSlot = this.$slots[slotName]
        if (contentSlot) {
          return contentSlot()
        }
      }

      let inputComponent,
        inputChildren = []
      if (isString(type)) {
        switch (type) {
          case 'select':
            inputComponent = ElSelect
            if (options) {
              options = getSelectOptions(options, this.selectOptionMap)
              inputChildren = (isRef(options) ? options.value : options).map(
                (item) => h(ElOption, { value: item.value, label: item.label })
              )
            }
            break
          case 'input':
            inputComponent = ElInput
            break
          default:
            inputComponent = resolveComponent(type)
            break
        }
      } else if (isObject(type)) {
        inputComponent = type
      } else {
        throw new Error('option type must a component or string')
      }
      const className = attrs.class ? attrs.class : {}

      return h(
        inputComponent,
        {
          ...attrs,
          class: [this.inputClass, className],
          size: this.size,
          modelValue: this.modelValue[prop],
          'onUpdate:modelValue': (value) => {
            const formData = { ...this.modelValue }
            formData[prop] = value
            this.$emit('update:modelValue', formData)
          }
        },
        () => inputChildren
      )
    }

    const createFormItemChildren = (option) => {
      const children = []

      if (option.label) {
        const labelSlot = this.$slots[option.labelSlotName]
        children.push(
          h(
            'div',

            {
              class: 'pd-search-item__label'
            },
            labelSlot
              ? labelSlot()
              : [
                  h('span', option.label),
                  this.labelSuffix
                    ? h('span', { class: 'label-suffix' }, this.labelSuffix)
                    : null
                ]
          )
        )
      }

      children.push(
        h(
          'div',
          { class: 'pd-search-item__content' },
          createFormItemContentChildren(option)
        )
      )
      return children
    }

    const createFormItems = () => {
      const children = []
      const beforeSlot = this.$slots.before
      const afterSlot = this.$slots.after
      if (beforeSlot) {
        children.push(
          h(
            'div',
            { class: ['pd-search-item'], style: this.formItemStyle },
            beforeSlot()
          )
        )
      }

      this.formItems.forEach((item) => {
        children.push(
          h(
            'div',
            {
              class: ['pd-search-item'],
              style: this.formItemStyle,
              key: item.prop
            },
            createFormItemChildren(item)
          )
        )
      })

      if (afterSlot) {
        children.push(
          h(
            'div',
            { class: ['pd-search-item'], style: this.formItemStyle },
            afterSlot()
          )
        )
      }

      return children
    }

    const searchFormRender = () => {
      const children = []
      const title = this.$slots.title
      if (title) {
        children.push(title())
      }

      children.push(
        h(
          'div',
          {
            class: `pd-search__wrapper ${this.flexWrap ? 'flex-wrap' : ''}`
          },
          createFormItems()
        )
      )
      return children
    }

    return h(
      'div',
      {
        class: 'pd-search',
        style: this.formStyle
      },
      searchFormRender()
    )
  }
}
</script>

<style lang="scss">
.pd-search {
  &__wrapper {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;

    &.flex-wrap {
      flex-wrap: wrap;

      .pd-search-item {
        margin-bottom: 10px;
      }
    }
  }

  &-item {
    display: flex;
    align-items: center;

    &__label {
      font-size: 14px;
      font-weight: 400;
    }
  }

  .label-suffix {
    white-space: pre;
    margin: 0 5px;
  }
}
</style>
