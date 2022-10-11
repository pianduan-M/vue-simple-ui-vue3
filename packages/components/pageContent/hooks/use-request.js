import { ref } from 'vue'
import { request } from '@pd-simple-ui/http'

export const useRequest = ({ props, _queryParams }) => {
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
      console.log(error, 'error')
      tableData.value = []
    }
  }

  return { tableData, getTableData }
}
