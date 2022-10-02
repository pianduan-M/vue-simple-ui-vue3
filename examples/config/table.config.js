const genders = {
  man: '男',
  woman: '女'
}

export const tableColumns = [
  {
    type: 'expand',
  },
  {
    type: 'selection',
  },
  { label: '时间', prop: 'createTime' },
  { label: '名字', prop: 'name', renderHeaderTips: () => 'test' },
  { label: '年龄', prop: 'age' },
  {
    label: '性别',
    prop: 'gender',
    formatter(row, value) {
      return genders[value] || ''
    }
  },
  { label: '身高', prop: 'height', unit: 'm' },
  { label: '体重', prop: 'weight', unit: 'kg' },
  { label: '政治面貌', prop: 'politics', enum: 'politicsList' },
  {
    label: '学历', prop: 'education', enum: {
      showValue: true,
    }
  },
  {
    label: '头像',

  },
  {
    label: '操作',
    slot: 'operate',
    align: 'center'
  }
]

export default {}