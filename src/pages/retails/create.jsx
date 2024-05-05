import { Button } from "@/components/Buttons"
import { Form } from "@/components/Form" 
import { FormField } from "@/components/FormIeld"
import { FormFieldBar } from "@/components/FormField/FormFieldBar"
import { FormFieldRestaurant } from "@/components/FormField/FormFieldRestaurant"
import { FormFielMusee } from "@/components/FormField/FormFielMusee"
import { FormFielParc } from "@/components/FormField/FormFieldParc"
import { typeValidator, nameValidator, addressValidator, cityValidator, postalCodeValidator, countryValidator, artMovementValidator, cuisineTypeValidator, starsValidator, averagePriceValidator, artTypeValidator, entryFeeValidator, barTypeValidator, parkTypeValidator, publicPrivateValidator, priceValidator } from "@/validator"
import axios from "axios"
import { Formik, Field } from "formik"
import * as yup from "yup"

const initialValues = {
    type: "",
    name: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    cuisineType: "", 
    stars: "1", 
    averagePrice: "1", 
    artMovement: "", 
    artType: "", 
    entryFee: "",
    barType: "", 
    parkType: "", 
    publicPrivate: "", 
    price: "0",
}
const validationSchema = yup.object({
    type: typeValidator,
    name: nameValidator,
    address: addressValidator,
    city: cityValidator,
    postalCode: postalCodeValidator,
    country: countryValidator,
    cuisineType : cuisineTypeValidator, 
    stars : starsValidator, 
    averagePrice : averagePriceValidator, 
    artMovement : artMovementValidator, 
    artType : artTypeValidator, 
    entryFee : entryFeeValidator, 
    barType : barTypeValidator, 
    parkType : parkTypeValidator, 
    publicPrivate : publicPrivateValidator, 
    price : priceValidator
})
const CreateRetailPage = () => {
  
  const handleSubmit = async (values, { resetForm }) => {
    await axios.post("http://localhost:3000/api/retails", values);
    resetForm();
  }
  const renderDetailsForm = (type) => {
    switch (type) {
      case 'Restaurant':
        return (
          <FormFieldRestaurant/>
        );
      case 'Musée':
        return (
          <FormFielMusee/>
        );
      case 'Bar':
        return (
          <FormFieldBar/>
        );
      case 'Parc':
        return (
          <FormFielParc/>
        );
      default:
        return null;
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      {({setFieldValue, values }) => (
      <Form>
        <span>Type de lieux</span>
        <Field as="select" name="type" className="border-2 focus:border-indigo-400 outline-none px-3 py-2" onChange={e => setFieldValue('type', e.target.value)}>
          <option value="">Choisir type</option>
          <option value="Restaurant">Restaurant</option>
          <option value="Musée">Musée</option>
          <option value="Bar">Bar</option>
          <option value="Parc">Parc</option>
        </Field>
        {renderDetailsForm(values.type)}
        <FormField name="name" placeholder="Enter le nom du lieux" label="Name"/>
        <FormField name="address" placeholder="Enter l'address" label="Address"/>
        <FormField name="city" placeholder="Enter le nom de la ville" label="City"/>
        <FormField name="postalCode" placeholder="Enter le code postal" label="PostalCode"/>
        <FormField name="country" placeholder="Enter le pays" label="Country"/>
        <Button type="submit">Create</Button>
      </Form>
      )}
    </Formik>
  )
}

export default CreateRetailPage
