import {FormField} from "@/components/FormIeld"
import { Form } from "formik"

export const FormFielParc = () => (
    <Form>
        <FormField
            name="parkType"
            placeholder="Enter le type de parc"
            label="Type de parc"
        />
        <FormField
            name="publicPrivate"
            placeholder="Public ou privé"
            label="Public ou privé"
        />
        <FormField
            name="entryFee"
            placeholder="Gratuit ou de 1 à 5"
            label="Gratuit ou payant"
        />
        <FormField
            name="price"
            placeholder="Enter le Prix"
            label="Prix (si gratuit mettre 0)"
        />
    </Form>
)