import PdSearchForm from "./SearchForm.vue";

PdSearchForm.install = function (app) {
  app.component(PdSearchForm.name, PdSearchForm);
};

export default PdSearchForm;
