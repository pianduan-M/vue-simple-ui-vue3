<template>
  <div class="page-header">
    <PdSearchForm
      :gutter="20"
      label-suffix=":"
      :formItems="searchFormItems"
      input-class="search-input"
      v-model="_queryParams"
      :size="size"
      v-bind="searchFromProps"
    >
      <!-- 透传 slot 给search-form -->
      <template v-for="slot in searchFormItemSlots" #[slot]="data">
        <slot :name="slot" v-bind="data" :key="slot" />
      </template>

      <template #after>
        <el-button-group :size="size">
          <el-button type="primary" :icon="Search" @click="onSearch"
            >搜索</el-button
          >
          <el-button
            type="warning"
            :icon="Setting"
            @click="handleResetQueryParams"
            >重置</el-button
          >
          <el-button v-if="exportUrl" type="waring" :icon="Download"
            >导出</el-button
          >
        </el-button-group>
      </template>
    </PdSearchForm>
  </div>
  <div class="page-table">
    <DimensionGroupVue
      v-if="dimensionList.length"
      v-model="dimensionGroup"
      :dimensionList="dimensionList"
    />
    <FilterColumn
      v-if="showColumnList.length"
      v-model:showColumnList="showColumnList"
      :columns="tableColumns"
    />

    <PdTable
      :columns="columns"
      :data="tableData"
      :summary-method="getSummaries"
      show-summary
      :commonColumnOptions="{ align: 'center' }"
    >
      <!-- 透传 slot 给search-form -->
      <template v-for="slot in tableSlots" #[slot]="data">
        <slot :name="slot" v-bind="data" :key="slot" />
      </template>
    </PdTable>
  </div>
  <Pagination
    v-model="_queryParams"
    @change="onSearch"
    :paginationPosition="$attrs.paginationPosition"
  />
</template>

<script>
import { defineProps, defineEmits, defineExpose, provide } from 'vue'

export default {
  name: 'PageContent'
}
</script>

<script setup>
import { Search, Download, Setting } from '@element-plus/icons-vue'
import DimensionGroupVue from './DimensionGroup.vue'
import Pagination from './Pagination.vue'
import FilterColumn from './FilterColumn.vue'
import pageContentProps from './page-content-props'
import { useSearchForm, useTable, useRequest, useTableSum } from '../hooks'

const props = defineProps(pageContentProps)
const emit = defineEmits(['reset'])

// search form
const { searchFormItemSlots, _queryParams, getQueryParams, resetQueryParams } =
  useSearchForm(props)

// table
const { dimensionGroup, dimensionList, columns, showColumnList, tableSlots } =
  useTable(props)

// 发送请求
const { tableData, getTableData } = useRequest({ props, _queryParams })
// 搜索
const onSearch = () => {
  getTableData(getQueryParams())
}
// 重置
const handleResetQueryParams = () => {
  emit('reset')
  resetQueryParams()
  onSearch()
}

onSearch()

// 总计行
const { getSummaries } = useTableSum({ columns })

defineExpose({
  onSearch,
  getQueryParams,
  getTableData
})

// 共享表格查询方法给子孙元素
provide('getTableData', onSearch)
</script>

<style scoped lang="scss">
.page-header {
  margin: 20px 0;
}

.page-table {
  margin: 20px 0;
}
</style>
