

export default {
  // 绑定的 formData 数据
  modelValue: {
    type: Object,
    required: true
  },

  // 创建 formItem 配置项
  formItems: {
    type: Array,
    default() {
      return []
    }
  },
  // el-col 布局配置
  colLayout: {
    type: Object,
    default() {
      return {
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        xs: 24
      }
    }
  },

  defaultFormItemProps: {
    type: Object,
    default() {
      return {}
    }
  },

  // 布局行的props
  rowAttrs: {
    type: Object,
    default() {
      return {}
    }
  },

  defaultInputAttrs: {
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
  }
}