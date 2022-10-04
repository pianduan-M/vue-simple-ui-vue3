import { h } from 'vue'
import TableActive from './index.vue'


function helperFn() {
  return function helper({ row, column, value }) {
    return h(TableActive, { row, column, value })
  }
}


export default function registerTableColumnType(PdTable) {
  PdTable.registerColumnType('active', helperFn)
}
