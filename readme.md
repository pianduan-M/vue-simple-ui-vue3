## Table

##### Table  Attributes

| 参数                | 说明                                                         | 类型   | 可选值 | 默认值 |
| ------------------- | ------------------------------------------------------------ | ------ | ------ | ------ |
| columns             | 表格列的配置项 详细配置看下下方                              | array  | —      | —      |
| commonColumnOptions | 表格列的公共配置，element-ui table-column 的 props 配置，该配置应用到每一列，会被 columns 中的配置覆盖 | object | —      | —      |
| nullValueDefault    | 如果列的值为空时 默认显示的 value                            | string | -      | -      |

其他所有 attrs 都会作为 el-table 的 props, 所有事件都会传递给 el-table 

作为插件注册时，传入配置将作为 `el-table` 的默认配置

##### Table column Attributes

| 参数      | 说明                                                         | 类型                         | 可选值 | 默认值 |
| --------- | ------------------------------------------------------------ | ---------------------------- | ------ | ------ |
| -         | Column 配置项中 el-table-column 有的 props 将全部传递给 el-table-column | object                       | —      |        |
| header    | 表格头部，插槽名称或字符串                                   | string                       | —      |        |
| children  | el-table-column 下的子元素配置项，具体看下方配置             | function,object,array,string | —      | —      |
| slotName  | 该列插槽名，可以在 table 中使用插槽 该插槽将作为该列最终展示的数据  跟 slots 同时传值时，slots 优先 | string                       | —      | —      |
| formatter | 列数据的格式化函数，return 的值将作为该列显示的值            | function                     | —      | —      |
| unit      | 如果传入该值将跟该列数据拼接，                               | string                       | —      | —      |

##### Table column slots Attributes

| 参数         | 说明                                                         | 类型                  | 可选值     | 默认值 |
| ------------ | ------------------------------------------------------------ | --------------------- | ---------- | ------ |
| elName       | 需要创建的 dom 名，也可以是已经全局注册过的自定义组件        | string                | —          | —      |
| attrs        | 子元素所有 attrs 都写在此配置项                              | object                | —          | —      |
| children     | 该 dom 或组件的 子元素，配置同该元素一样                     | object function array | —          | —      |
| childrenType | el-table-column 根据给出类型自动创建，暂时支持 image指定特殊类型，根据特殊类型自动创建元素 | Stringstring          | Imageimage | —      |

## Form

##### Form Attributes

| 参数                                   | 说明                                                         | 类型    | 可选值     | 默认值 |
| -------------------------------------- | ------------------------------------------------------------ | ------- | ---------- | ------ |
| v-model/modelValue                     | 双向绑定的表单数据, 同 el-form 的 model                      | object  | —          | —      |
| formItems                              | 表单 item 配置项，具体配置看下方 form-item attributes        | array   | —          | —      |
| colLayout                              | el-form-item 的布局配置，具体配置查看 el-col                 | object  | —          | —      |
| defaultFormItemProps                   | el-form-item 的默认 props ，会被 formItems 中的配置覆盖      | object  | —          | —      |
| rowAttrs                               | el-row 的 props                                              | object  | —          | —      |
| defaultInputAttrs                      | el-form-item 下的 所有input select 等表单元素的公共 props    | object  | —          | —      |
| selectOptionMap                        | el-select 的 options 配置 通过formItem 传入相应 key 取值，通常是当 select 的值是异步获取时使用， | object  | —          | —      |
| autoClearValidate                      | 是否在 dialog 关闭后自动清除表单验证消息 （需要祖先组件停供一个 dialogVisible 的 provide  ）当监听到 dialogVisible 为 false 时 自动清理 | Boolean | true,false | true   |
| 其余 attrs 都会当作 props 传给 el-form |                                                              |         |            |        |



##### Form methods

| 方法名        | 说明       | 参数 |
| ------------- | ---------- | ---- |
| validate      | 同 el-form | —    |
| validateField | 同 el-form | —    |
| scrollToField | 同 el-form | —    |
| resetFields   | 同 el-form | —    |
| clearValidate | 同 el-form | —    |

其余 el-form 方法都可以通过组件引用调取



##### Form Item Attributes

| 参数                          | 说明                                                         | 类型                   | 可选值   | 默认值 |
| ----------------------------- | ------------------------------------------------------------ | ---------------------- | -------- | ------ |
| layout                        | el-form-item 的 ElCol 的 props                               | object                 | —        | —      |
| component                     | el-form-item 管理下的表单元素类型，可以是字符串跟vue 组件，如果是字符串，会先匹配 select,input，date 使用el-select el-input,没有匹配上再用 resolveComponent 匹配全局注册的组件 | string, vueComponent   | 表单组件 | —      |
| renderLabel                   | el-form-item 中 label 值，如果该值是 string 时，将作为插槽名 | function string        | —        | —      |
| labelTooltip                  | el-form-item 中 label 的 tips 内容                           | string,object,function | —        | —      |
| isHidden                      | 是否隐藏该项                                                 | boolean                | —        | —      |
| inputAttrs                    | el-form-item 管理下的表单元素 props                          | object                 | —        | —      |
| inputChildrenComponent        | 为 el-select 这种还有子元素的表单组件准备，options 会根据该项创建 | vueComponent           | —        | —      |
| options                       | 为 el-select 这种还有子元素的表单组件准备，会根据该项创建子元素 | Array                  | —        | —      |
| slotName                      | el-form-item 下表单元素的插槽名                              | string                 | —        | —      |
| placeholder                   | el-form-item 下表单元素的 placeholder                        | string                 | —        | —      |
| desc                          | el-fom-item 下表单元素的描述文本                             | string，function       | —        | —      |
| 其余配置项都传递给 ElFormItem |                                                              |                        |          |        |



##### useForm 返回值

接收一个 from 初始值的配置对象 返回

| 参数          | 说明                       | 类型     | 可选值 | 默认值 |
| ------------- | -------------------------- | -------- | ------ | ------ |
| formData      | 响应式form data对象        | object   | —      | —      |
| formRef       | 组件引用，需挂载到组件 ref | object   | —      | —      |
| validate      | 同 el-form                 | function | —      | —      |
| validateField | 同 el-form                 | function | —      | —      |
| scrollToField | 同 el-form                 | function | —      | —      |
| clearValidate | 同 el-form                 | function | —      | —      |
| resetFields   | 同 el-form                 | function | —      | —se    |

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
| component          | 表单项下的表单元素类型,element-ui 元素,可以是全局注册下的组件名，或者组件，当是字符串时优先匹配 input select 使用el-input el-select，当没有匹配上时使用 resolveComponent 全局匹配 | string,vueComponent | input,select | —      |
| options       | el-select 的 options 配置，当是 string 类型时，回到 selectOptionMap 中取值 | array string        | —            | —      |
| attrs         | 表单元素 props                                               | object              | —            | —      |
| slotName      | 表单元素插槽名                                               | string              | —            | —      |

##### Search-form slot 插槽

| name   | 说明           |
| ------ | -------------- |
| before | form-item 前置 |
| after  | form-item 后置 |

