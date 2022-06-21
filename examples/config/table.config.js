const genders = {
  man: '男',
  woman: '女'
}

export const tableColumns = [
  {
    type: 'expand',
    children:{
      elName:"div",
      children:"abc"
    }
  },
  {
    type: 'selection',
 
  },
  { label: '时间', prop: 'createTime' },
  { label: '名字', prop: 'name' },
  { label: '年龄', prop: 'age' },
  {
    label: '性别',
    prop: 'gender',
    formatter(value) {
      return genders[value] || ''
    }
  },
  { label: '身高', prop: 'height', unit: 'm' },
  { label: '体重', prop: 'weight', unit: 'kg' },
  {
    label: '头像',
    children:{
      childrenType:"image",
      key:"image.fileUrl",
      attrs:{
        class:['test'],
        style:{width:'120px'},
        onClick(){
          console.log('test');
        }
      }
    }
  },
  {
    label: '操作',
    slotName: 'operate',
    props: { align: 'center' }
  }
]

export default {}