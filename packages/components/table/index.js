import PdTable from './table'

PdTable.install =  (app, options)=> {
  if (options) {
    PdTable.data = () => ({ globleTableOptions: options })
  }
  app.component(PdTable.name, PdTable)
}

export default PdTable
