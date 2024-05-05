import { Button } from '@/components/Buttons';
import axios from 'axios';
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/router';



export const getServerSideProps = async ({ query: { retailId } }) => {
    const { data : retail } = await axios(
      `http://localhost:3000/api/retails/${retailId}`,
    )
  
    return { props: { retail } }
}

const RetailEditPage = ({ retail }) => {
    const initialRetails = Object.values(retail)
    const [retails, setRetails] = useState(initialRetails)
    const router = useRouter();

    const handleDelete = (retailId) => async () => {
        const newRetails = retails.filter(({ _id }) => _id !== retailId)
        setRetails(newRetails)
    
        try {
          await axios.delete(`http://localhost:3000/api/retails/${retailId}`)
          alert('Suppression réussie!');
          router.back();
        } catch (err) {
          setRetails([...newRetails])
        }
    }



    const renderDetails = (type) => {
        switch (type) {
          case 'Restaurant':
            return (
                <div>
                    <p><b>Type de cuisine : </b>{retail.restaurant.cuisineType}</p>
                    <p><b>Évaluation : </b>{retail.restaurant.stars} étoiles</p>
                    <p><b>Prix moyen : </b>{retail.restaurant.averagePrice}</p>
                </div>
            );
          case 'Musee':
            return (
                <div>
                    <p><b>Courant artistique : </b>{retail.musee.artMovement}</p>
                    <p><b>Type d'art : </b>{retail.musee.artType}</p>
                    <p><b>Gratuit ou payant : </b>{retail.musee.entryFee}</p>
                    <p><b>Prix : </b>{retail.musee.price}€</p>
                </div>            
                );
          case 'Bar':
            return (
                <div>
                    <p><b>Type de bar : </b>{retail.bar.barType}</p>
                    <p><b>Prix moyen : </b>{retail.bar.averagePrice}</p>
                </div>
            );
          case 'Parc':
            return (
                <div>
                    <p><b>Type de parc : </b>{retail.parc.parkType}</p>
                    <p><b>Public ou privé : </b>{retail.parc.publicPrivate} étoiles</p>
                    <p><b>Gratuit ou payant : </b>{retail.parc.entryFee}</p>
                    <p><b>Prix : </b>{retail.parc.price}€</p>
                </div> 
            );
          default:
            return null;
        }
      };

    return (
        <div className="container grid place-items-center">
            <h2><b>Détails sur le lieu</b></h2>
            <div className="details">
                <p><b>Type de lieu : </b>{retail.type}</p>
                <p><b>Nom : </b>{retail.name}</p>
                <p><b>Adresse : </b>{retail.address}</p>
                <p><b>Ville : </b>{retail.city}</p>
                {renderDetails(retail.type)}
            </div>
            <div>
                <Button variant="danger" onClick={handleDelete(retail._id)}>DELETE</Button>
                <Link href={`/retails/${retail._id}/edit`}>
                    <Button>MODIFIER</Button>
                </Link>
            </div>
        </div>

    );
}

export default RetailEditPage;
