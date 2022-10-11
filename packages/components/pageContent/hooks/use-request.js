import { ref, watch } from 'vue'
import { request } from '@pd-simple-ui/http'
import { debounce } from 'throttle-debounce'

export const useRequest = ({ props, _queryParams, getQueryParams }) => {
  // 表格数据
  const tableData = ref([])
  const getTableData = async (params) => {
    if (!props.url.list) {
      throw new Error('需要提供请求路径')
    }

    try {
      const res = await request({ url: props.url.list, method: 'GET', params })
      tableData.value = res.data || []
      _queryParams.value.total = res.total
    } catch (error) {
      tableData.value = []
    }
  }

  // 自动搜索
  function helper() {
    getTableData(getQueryParams())
  }
  if (props.autoSearch) {
    watch(_queryParams, debounce(500, helper))
  }

  return { tableData, getTableData }
}
