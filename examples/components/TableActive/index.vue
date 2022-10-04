<template>
  <div class="table-active">
    <el-popconfirm
      confirm-button-text="确认"
      cancel-button-text="取消"
      :title="title"
      @confirm="onConfirm"
    >
      <template #reference>
        <el-switch :value="value" active-text="是" inactive-text="否" />
      </template>
    </el-popconfirm>
  </div>
</template>

<script>
import { defineProps, computed } from 'vue'

export default {
  name: 'TableActive'
}
</script>
<script setup>
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
    default: ''
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

const onConfirm = () => {}
</script>

<style scoped lang="scss"></style>
