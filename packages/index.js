import PdForm from "./form";
import PdTable from "./table";
import PdSearchForm from "./searchForm";

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
