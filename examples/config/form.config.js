
export const formItems = [
  {
    prop: "name",
    label: "姓名",
    type: "input",
  },
  {
    prop: "age",
    label: "年龄",
    renderLabel: "ageLabel",
    type: "input",
  },
  {
    prop: "gender",
    label: "性别",
    renderLabel: () => "性别性别性别性别性别性别性别",
    type: "select",
    options: [
      {
        label: "男",
        value: "man",
      },
      {
        label: "女",
        value: "woman",
      },
    ],
  },
  {
    prop: "height",
    label: "身高",
    type: "input",
   
  },
  {
    label: "体重",
    slotName: "weight",
  },
];


export const searchFormItems = [
  {
    label: "姓名",
    prop: "name",
    type: "input",
  },
  {
    label: "年龄",
    prop: "age",
    type: "input",
  },
  {
    label: "性别",
    type: "select",
    prop: "gender",
    options:"gender",
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
    slotName:"weight",
    prop:"weight",
    label:"体重"
  },
  {
    label:"时间",
    prop:"createTime",
    type:"ElDatePicker",
    attrs:{
      onChange(val) {
        console.log(val);
      }
    }
  }
];


export const rules = {
  name:[
    {
      required:true,message:"请输入3333",trigger:"blur"
    }
  ],
  age:[
    {
      required:true,message:"请输入3333",trigger:"blur"
    }
  ],
  

}


