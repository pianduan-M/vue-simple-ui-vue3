import PdForm from './form'
import PdTable from './table'
import PdSearchForm from './searchForm'
import PdPageContent from './pageContent'

const components = [PdForm, PdTable, PdSearchForm, PdPageContent]

function install(app) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
  PdForm,
  PdTable,
  PdSearchForm
}
