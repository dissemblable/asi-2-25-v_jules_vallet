import { Button } from "@/components/Buttons"
import { Form } from "@/components/Form"
import { FormField } from "@/components/FormIeld"
import { FormFieldBar } from "@/components/FormField/FormFieldBar"
import { FormFieldRestaurant } from "@/components/FormField/FormFieldRestaurant"
import { FormFielMusee } from "@/components/FormField/FormFielMusee"
import { FormFielParc } from "@/components/FormField/FormFieldParc"
import { typeValidator, nameValidator, addressValidator, cityValidator, postalCodeValidator, countryValidator, artMovementValidator, cuisineTypeValidator, starsValidator, averagePriceValidator, artTypeValidator, entryFeeValidator, barTypeValidator, parkTypeValidator, publicPrivateValidator, priceValidator } from "@/validator"
import axios from "axios"
import { Formik } from "formik"
import { useRouter } from "next/router"
import * as yup from "yup"

export const getServerSideProps = async ({ query: { retailId } }) => {
  const { data : retail } = await axios(
    `http://localhost:3000/api/retails/${retailId}`,
  )

  return { props: { retail } }
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
const RetailEditPage = ({ retail }) => {
    const router = useRouter()
    const initialValues = {
        type: retail.type,
        name: retail.name,
        address: retail.address,
        city: retail.city,
        postalCode: retail.postalCode,
        country: retail.country,
        cuisineType: retail.restaurant.cuisineType, 
        stars: retail.restaurant.stars, 
        averagePrice: retail.restaurant.averagePrice, 
        artMovement: retail.musee.artMovement, 
        artType: retail.musee.artType, 
        entryFee: retail.musee.entryFee,
        barType: retail.bar.barType, 
        parkType: retail.parc.parkType, 
        publicPrivate: retail.parc.publicPrivate, 
        price: retail.parc.price
    }
    const handleSubmit = async (values) => {
        console.log(values)
      await axios.patch(`http://localhost:3000/api/retails/${retail._id}`, values)
  
      router.push("/")
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
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form>
                <p>Type de lieu : {retail.type}</p>
                {renderDetailsForm(retail.type)}
                <FormField name="name" placeholder="Enter le nom du lieux" label="Name"/>
                <FormField name="address" placeholder="Enter l'address" label="Address"/>
                <FormField name="city" placeholder="Enter le nom de la ville" label="City"/>
                <FormField name="postalCode" placeholder="Enter le code postal" label="PostalCode"/>
                <FormField name="country" placeholder="Enter le pays" label="Country"/>
                <Button type="submit">Sauvegarder</Button>
            </Form>
        </Formik>
    )
  }
  export default RetailEditPage

