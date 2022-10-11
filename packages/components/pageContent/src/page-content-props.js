export default {
  // 搜索配置项
  searchFormItems: {
    type: Array,
    default: () => []
  },
  // 表格查询参数
  queryParams: {
    type: Object,
    default: () => ({})
  },
  // search form 配置项
  searchFromProps: {
    type: Object,
    default: () => ({})
  },
  // 导出链接
  exportUrl: {
    type: String,
    default: ''
  },

  // 表格配置项
  tableColumns: {
    type: Array,
    default: () => []
  },
  url: {
    type: Object,
    default: () => ({})
  },

  // 全局 表单组件 size
  size: {
    type: String,
    default: ''
  },

  // 搜索条件改变自动搜索
  autoSearch: {
    type: Boolean,
    default: false
  }
}
