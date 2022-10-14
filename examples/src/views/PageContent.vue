<template>
  <div>
    <page-content
      :tableColumns="tableColumns"
      :searchFormItems="searchFormItems"
      :queryParams="queryParams"
      :url="url"
      ref="pageContentRef"
    >
      <template #operate>
        <el-button type="text">编辑</el-button>
      </template>
      <template #weight>
        <el-input v-model="queryParams.weight" clearable> </el-input>
      </template>
    </page-content>
  </div>
</template>

<script>
import { ref } from 'vue'
import TableImage from '../components/TableImage.vue'

export default {
  name: 'Admin2'
}
</script>
<script setup>
const pageContentRef = ref()

const politicsList = ref([
  {
    label: '群众',
    value: 1
  },
  {
    label: '党员',
    value: 2
  }
])

const educationList = ref([
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
    value: 3
  },
  {
    label: '本科',
    value: 4
  }
])

const genders = {
  man: '男',
  woman: '女'
}
const maritalList = [
  {
    label: '未婚',
    value: 1
  },
  {
    label: '已婚',
    value: 2
  }
]
const url = {
  list: '/api/person',
  edit: '/api/person'
}

const tableColumns = [
  {
    type: 'expand'
  },
  {
    type: 'selection'
  },
  { label: '时间', prop: 'createTime', groupHidden: false },
  {
    label: '名字',
    prop: 'name',
    renderHeaderTips: () => 'test',
    groupHidden: false
  },
  {
    label: '年龄',
    prop: 'age',
    footerComputed: { type: 'sum' },
    groupHidden: true
  },
  {
    label: '性别',
    prop: 'gender',
    formatter(row, value) {
      return genders[value] || ''
    }
  },
  {
    label: '身高',
    prop: 'height',
    unit: 'm',
    footerComputed: { type: 'average', toFixed: 4 }
  },
  {
    label: '体重',
    prop: 'weight',
    unit: 'kg',
    footerComputed: {
      type: 'average',
      formatter(row, prop) {
        return row.weight + 1000
      }
    }
  },
  { label: '政治面貌', prop: 'politics', enum: politicsList },
  {
    label: '学历',
    prop: 'education',
    enum: {
      showValue: true,
      options: educationList
    }
  },
  {
    label: '婚姻状况',
    prop: 'marital',
    enum: {
      options: maritalList,

      getAttrs(row) {
        const result = {}

        if (row && row.marital) {
          switch (row.marital) {
            case 1:
              result.class = 'danger-color'
              break
            case 2:
              result.class = 'success-color'

              break

            default:
              break
          }
        }
        return result
      }
    }
  },
  {
    label: '头像',
    prop: 'avatar',
    slot(row) {
      return {
        component: TableImage,
        row: { image: row.avatar.image },
        prop: 'image'
      }
    },
    width: '200px'
  },
  {
    label: '是否展示',
    prop: 'active',
    type: 'active',
    columnTypeOptions: {
      edit: url.edit
      // successCallback() {
      //   pageContentRef.value?.onSearch()
      // }
    },
    width: '200px'
  },
  {
    label: '操作',
    slot: 'operate',
    align: 'center'
  }
]

const queryParams = ref({})
const searchFormItems = [
  {
    label: '姓名',
    prop: 'name',
    component: 'input'
  },
  {
    label: '年龄',
    prop: 'age',
    component: 'input'
  },
  {
    label: '性别',
    component: 'select',
    prop: 'gender',
    options: 'gender'
    // options: [
    //   {
    //     label: "男",
    //     value: "man",
    //   },
    //   {
    //     label: "女",
    //     value: "woman",
    //   },
    // ],
    // options:genderOptions ,
  },
  {
    slotName: 'weight',
    prop: 'weight',
    label: '体重'
  },
  {
    label: '时间',
    prop: 'createTime',
    component: 'date',
    onChange(val) {
      console.log(val)
    },
    placeholder: '请选择',
    format: 'YYYY-MM-DD',
    valueFormat: 'YYYY-MM-DD'
  }
]
</script>

<style scoped lang="scss"></style>
