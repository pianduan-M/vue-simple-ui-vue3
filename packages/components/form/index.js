import PdForm from './form'
import { useForm } from './use-form'

PdForm.install = function (app) {
  app.component(PdForm.name, PdForm)
}

PdForm.useForm = useForm

export default PdForm
