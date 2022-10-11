<template>
  <div class="table-active">
    <el-popconfirm
      confirm-button-text="确认"
      cancel-button-text="取消"
      :title="title"
      @confirm="onConfirm"
    >
      <template #reference>
        <el-switch
          :active-value="1"
          :inactive-value="0"
          :value="value"
          active-text="是"
          inactive-text="否"
        />
      </template>
    </el-popconfirm>
  </div>
</template>

<script>
import { defineProps, computed, inject } from 'vue'
import { request } from '@pd-simple-ui/http'
import { isFunction } from '@pd-simple-ui/utils'

export default {
  name: 'TableActive'
}
</script>
<script setup>
const getTableData = inject('getTableData')

const props = defineProps({
  row: {
    type: Object,
    default: () => {}
  },
  column: {
    type: Object,
    default: () => {}
  },
  value: {
    default: 0
  }
})
const title = computed(() => {
  let result = ''
  if (props.value === 1) {
    result = '是否关闭'
  } else {
    result = '是否开启'
  }
  return result
})

const onConfirm = async () => {
  const { column, value, row } = props
  const { columnTypeOptions = {} } = column
  if (columnTypeOptions.edit) {
    try {
      const data = { ...row, active: value === 0 ? 1 : 0 }
      await request({
        url: columnTypeOptions.edit,
        data,
        method: 'put'
      })

      if (
        column.columnTypeOptions &&
        column.columnTypeOptions.successCallback
      ) {
        column.columnTypeOptions.successCallback({ column, value, row })
      } else if (getTableData && isFunction(getTableData)) {
        getTableData()
      }
    } catch (error) {
      console.log(error)
    }
  }
}
</script>

<style scoped lang="scss"></style>
