## SearchForm

##### Search-form Attributes

| 参数               | 说明                                                         | 类型         | 可选值        | 默认值 |
| ------------------ | ------------------------------------------------------------ | ------------ | ------------- | ------ |
| v-model/modelValue | 绑定的 表单数据                                              | object       | —             | —      |
| formItems          | 表单配置项                                                   | array        | —             | —      |
| gutter             | 表单项间隔                                                   | number       | —             | 0      |
| size               | 表单项下的组件尺寸                                           | string       | 同 element-ui | small  |
| inputClass         | 表单项下表单元素类名                                         | object array | —             | —      |
| labelSuffix        | 表单项 label 后缀                                            | string       | —             | —      |
| flexWrap           | 宽度超出是否换行                                             | boolean      | —             | false  |
| selectOptionMap    | el-select 的 options 配置 通过formItem 传入相应 key 取值，通常是当 select 的值是异步获取时使用， | object       | —             | —      |



##### Search-form Item Attributes

| 参数          | 说明                                                         | 类型                | 可选值       | 默认值 |
| ------------- | ------------------------------------------------------------ | ------------------- | ------------ | ------ |
| label         | 表单 label                                                   | string              | —            | —      |
| labelSlotName | 表单 label 插槽名                                            | string              | —            | —      |
| prop          | 表单域字段                                                   | string              | —            | —      |
| type          | 表单项下的表单元素类型,element-ui 元素,可以是全局注册下的组件名，或者组件，当是字符串时优先匹配 input select 使用el-input el-select，当没有匹配上时使用 resolveComponent 全局匹配 | string,vueComponent | input,select | —      |
| options       | el-select 的 options 配置，当是 string 类型时，回到 selectOptionMap 中取值 | array string        | —            | —      |
| attrs         | 表单元素 props                                               | object              | —            | —      |
| slotName      | 表单元素插槽名                                               | string              | —            | —      |

##### Search-form slot 插槽

| name   | 说明           |
| ------ | -------------- |
| before | form-item 前置 |
| after  | form-item 后置 |

