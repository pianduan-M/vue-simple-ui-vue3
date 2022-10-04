import TableImage from '../components/TableImage.vue'


const genders = {
  man: '男',
  woman: '女'
}
const maritalList = [
  {
    label: "未婚",
    value: 1
  },
  {
    label: "已婚",
    value: 2
  },
]


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
    label: "婚姻状况",
    prop: "marital",
    enum: {
      options: maritalList,

      getAttrs(row) {
        const result = {}

        if (row && row.marital) {
          switch (row.marital) {
            case 1:
              result.class = 'danger-color'
              break;
            case 2:
              result.class = 'success-color'

              break;

            default:
              break;
          }

        }
        return result
      }
    }
  },
  {
    label: '头像',
    prop: "image",
    slot(row) {
      return {
        component: TableImage,
        row: { image: row.image.fileUrl },
        prop: 'image'
      }
    }
  },
  {
    label: "是否展示",
    prop: "active",
    type: "active"
  },
  {
    label: '操作',
    slot: 'operate',
    align: 'center'
  }
]

export default {}