<template>
  <div>
    <PdTable
      :columns="tableColumns"
      :data="tableData"
      :commonColumnOptions="{ align: 'center' }"
      :selectOptionMap="selectOptionMap"
    >
      <template #operate="{ row }">
        <el-button type="text" @click="handleEditorAdd(row)">编辑</el-button>
      </template>
    </PdTable>

    <PdSearchForm
      :gutter="20"
      :formItems="itemOptions"
      input-class="search-input"
      v-model="searchValue"
      size="default"
      :selectOptionMap="selectOptionMap"
      flex-wrap
      :commonProps="{ style: { width: '100px' } }"
      searchBtnPosition="end"
    >
      <template #after>
        <el-button size="default" type="primary" @click="handleSearch"
          >搜索</el-button
        >
        <el-button size="default" type="primary" @click="handleEditorAdd({})"
          >新增</el-button
        >
      </template>

      <template #weight>
        <el-input style="width: 100px"></el-input>
      </template>
    </PdSearchForm>

    <el-dialog v-model="dialogVisible">
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
    </el-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, provide } from 'vue'

export default defineComponent({
  name: 'TestAdmin'
})
</script>
<script setup>
import PdSimpleUi from '../../packages'
import { tableColumns } from '../config/table.config'
import { rules, searchFormItems } from '../config/form.config'

const { PdTable, PdSearchForm, PdForm } = PdSimpleUi

const useForm = PdForm.useForm
const tableData = [
  {
    createTime: '2022/02/12',
    name: 'test',
    age: '13',
    gender: 'man',
    height: '188',
    weight: '70',
    politics: 1,
    education: 1,
    image: {
      fileUrl:
        'https://neilning-xc.github.io/2021/12/12/ckxj3g81e000p9ynthi2f2uqb/bg.jpeg'
    }
  }
]
const educationList = ref([])
tableColumns[9].enum.options = educationList

const dialogVisible = ref(false)
provide('dialogVisible', dialogVisible)
const handleEditorAdd = () => {
  dialogVisible.value = true
}

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

const selectOptionMap = reactive({})

const handleSearch = () => {
  console.log(searchValue.value)
}

const formItems = [
  {
    prop: 'name',
    label: '姓名',
    component: 'input',
    labelTooltip: 'test'
  },
  {
    isHidden(value) {
      if (value.gender === 'woman') {
        return true
      }

      console.log(value)
      return false
    },
    prop: 'age',
    label: '年龄',
    renderLabel: 'ageLabel',
    component: 'input',
    inputAttrs: {
      onChange() {
        console.log(this, 'onChange', formItems)
      }
    },
    desc: 'djkashdoihasdoishadoiahsdoisahdois'
  },
  {
    prop: 'gender',
    label: '性别',
    renderLabel: () => '性别性别性别性别性别性别性别',
    component: 'select',
    options: [
      {
        label: '男',
        value: 'man'
      },
      {
        label: '女',
        value: 'woman'
      }
    ],
    inputAttrs: {
      onChange(value) {
        console.log(value, 'value', this)
      }
    }
  },
  {
    prop: 'height',
    label: '身高',
    component: 'input',
    desc: 'shfoidshfoidshFOIDSAHFOISDHFOIDSHFOISHFOIDS'
  },
  {
    label: '体重',
    slotName: 'weight'
  }
]

const itemOptions = reactive(searchFormItems)

setTimeout(() => {
  selectOptionMap.gender = [
    {
      label: '男',
      value: 'man'
    },
    {
      label: '女',
      value: 'woman'
    }
  ]

  selectOptionMap.politicsList = [
    {
      label: '群众',
      value: 1
    },
    {
      label: '党员',
      value: 2
    }
  ]

  educationList.value = [
    {
      label: '小学',
      value: 1
    },
    {
      label: '初中',
      value: 2
    },
    {
      label: '高中',
      value: 2
    },
    {
      label: '本科',
      value: 2
    }
  ]
}, 3000)
</script>

<style></style>
