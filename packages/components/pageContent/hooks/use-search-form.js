import { computed, ref, isRef } from 'vue'

export const useSearchForm = (props) => {
  // search form 插槽
  const searchFormItemSlots = computed(() => {
    const result = []
    props.searchFormItems.map((item) => {
      if (item.slotName) {
        result.push(item.slotName)
      } else if (item.labelSlotName) {
        result.push(item.labelSlotName)
      }
    })
    return result
  })

  // 搜索参数
  // eslint-disable-next-line no-underscore-dangle
  const _queryParams = ref({
    page: 1,
    size: 10
  })
  const searchFormData = computed(() => {
    let result
    if (props.queryParams) {
      const queryParams = isRef(props.queryParams)
        ? props.queryParams.value
        : props.queryParams
      result = { ...queryParams, ..._queryParams.value }
    } else {
      result = { ..._queryParams.value }
    }
    return result
  })
  const getQueryParams = () => searchFormData.value

  // 重置参数
  const resetQueryParams = () => {
    _queryParams.value = { page: 1, size: 10 }
  }

  return {
    searchFormItemSlots,
    _queryParams,
    getQueryParams,
    resetQueryParams
  }
}
