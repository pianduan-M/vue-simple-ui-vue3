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

