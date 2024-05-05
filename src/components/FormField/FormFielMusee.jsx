import {FormField} from "@/components/FormIeld"
import { Form } from "formik"

export const FormFielMusee = () => (
    <Form>
        <FormField
            name="artMovement"
            placeholder="Enter le courant artistique"
            label="Courant artistique"
        />
        <FormField
            name="artType"
            placeholder="Enter le type d'art"
            label="Type d'art"
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