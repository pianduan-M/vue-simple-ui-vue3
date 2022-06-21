import PdForm from "./components/form";
import PdTable from "./components/table";
import PdSearchForm from "./components/search-form";

const components = [PdForm, PdTable, PdSearchForm];

function install(app) {
  components.forEach((component) => {
    app.component(component.name, component);
  });
}

export default {
  install,
  PdForm,
  PdTable,
  PdSearchForm,
};
