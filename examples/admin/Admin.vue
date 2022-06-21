<template>
  <div>
    <PdTable
      :columns="tableColumns"
      :data="tableData"
      :commonColumnOptions="{ align: 'center' }"
    >
      <template #operate="{ row }">
        <el-button type="text" @click="handleEditorAdd(row)">编辑</el-button>
      </template>
    </PdTable>

    <pdForm
      :formItems="formItems"
     
      v-model="formData"
      ref="formRef"
      :rules="rules"
      :colLayout="{ span: 24 }"
    >
      <template #weight>
        <el-input type="text" v-model="formData.weight" /> </template
    ></pdForm>

    <el-button @click="handleValidate">验证</el-button>
    <el-button @click="clearValidate">重置</el-button>

    <PdSearchForm
      :gutter="20"
      label-suffix=":"
      :formItems="itemOptions"
      input-class="search-input"
      v-model="searchValue"
      size="default"
      flex-wrap
      :selectOptionMap="selectOptionMap"
    >
      <template #after>
        <el-button size="default" type="primary" @click="handleSearch">搜索</el-button>
        <el-button size="default" type="primary" @click="handleEditorAdd({})"
          >新增</el-button
        >
      </template>

      <template #weight>
        <el-input></el-input>

      </template>
    </PdSearchForm>
  </div>
</template>

<script>
import { defineComponent, ref,reactive } from 'vue'

export default defineComponent({
  name: 'TestAdmin'
})
</script>
<script setup>
import PdTable from '../../packages/components/table'
import PdSearchForm from '../../packages/components/search-form'
import { tableColumns } from '../config/table.config'
import pdForm from '../../packages/components/form'
import { formItems, rules, searchFormItems } from '../config/form.config'

const useForm = pdForm.useForm
const tableData = [
  {
    createTime: '2022/02/12',
    name: 'test',
    age: '13',
    gender: 'man',
    height: '188',
    weight: '70',
    image: {
      fileUrl:
        'https://neilning-xc.github.io/2021/12/12/ckxj3g81e000p9ynthi2f2uqb/bg.jpeg'
    }
  }
]

const { formData, formRef, clearValidate, validate } = useForm({
  name: '',
  age: '',
  height: '',
  gender: '',
  weight: ''
})

const handleValidate = () => {
  console.log(validate())
}

const searchValue = ref({})

const selectOptionMap = ref({})

const handleSearch =() => {
  console.log(searchValue.value);
}

const itemOptions = reactive(searchFormItems)

setTimeout(() => {

  selectOptionMap.value.gender = [
    {
      label: '男',
      value: 'man'
    },
    {
      label: '女',
      value: 'woman'
    }
  ]
}, 3000)
</script>

<style></style>
