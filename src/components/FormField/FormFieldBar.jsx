import {FormField} from "@/components/FormIeld"
import { Form } from "formik"

export const FormFieldBar = () => (
    <Form>
        <FormField
            name="barType"
            placeholder="Enter le Type de bar"
            label="Type de bar"
        />
        <FormField
            name="averagePrice"
            placeholder="Enter le Prix moyen"
            label="Prix moyen"
        />
    </Form>
)