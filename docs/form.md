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
| component                     | el-form-item 管理下的表单元素类型，可以是字符串跟vue 组件，如果是字符串，会先匹配 select,input 使用el-select el-input,没有匹配上再用 resolveComponent 匹配全局注册的组件 | string, vueComponent   | 表单组件 | —      |
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

