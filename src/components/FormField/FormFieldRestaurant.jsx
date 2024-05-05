import {FormField} from "@/components/FormIeld"
import { Form } from "formik"

export const FormFieldRestaurant = () => (
    <Form>
        <FormField
            name="cuisineType"
            placeholder="Enter le type de cuisine"
            label="Type de cuisine"
        />
        <FormField
            name="stars"
            placeholder="Enter le nombre d'étoiles"
            label="Nombre d'étoiles"
        />
        <FormField
            name="averagePrice"
            placeholder="Enter le Prix moyen"
            label="Prix moyen"
        />
    </Form>
)