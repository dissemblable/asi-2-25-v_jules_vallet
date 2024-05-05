import { Button } from "@/components/Buttons"
import { ButtonBis } from "@/components/ButtonHomePage";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";

export const getServerSideProps = async () => {
    const { data: retails } = await axios("http://localhost:3000/api/retails");

    return {
        props: { initialRetails: Object.values(retails) },
    }
}

const HomePage = ({ initialRetails }) => {
    const [retails, setRetails] = useState(initialRetails);
    const [filter, setFilter] = useState('');

    const handleFilterChange = (newFilter) => {
        setFilter(newFilter);
    }

    const filteredRetails = filter ? retails.filter(retail => retail.type === filter) : retails;

    return (
        <div className="grid grid-cols-2">
            <div className="filter-controls">
                <div className="">
                    <ButtonBis onClick={() => handleFilterChange('Restaurant')}>Restaurant</ButtonBis>
                    <ButtonBis onClick={() => handleFilterChange('Musée')}>Musée</ButtonBis>
                </div>
                <div>
                    <ButtonBis onClick={() => handleFilterChange('Parc')}>Parc</ButtonBis>
                    <ButtonBis onClick={() => handleFilterChange('Bar')}>Bar</ButtonBis>
                </div>
                <div>
                    <ButtonBis onClick={() => handleFilterChange('')}>Reset</ButtonBis>
                </div>
            </div>
            <ul className="flex flex-col gap-4">
                {filteredRetails.map(({ _id, type, name, address, city, country }) => (
                    <li key={_id} className="group flex flex-col items-start gap-2 border-2 border-black rounded-2xl bg-white">
                        <Link href={`/retails/${_id}/detail`} className="flex flex-col gap-2 py-1">
                            <span>Type de lieux : {type}</span>
                            <span>Nom : {name}</span>
                            <span>Adresse : {address}, {city}</span>
                            <span>Pays : {country}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default HomePage;
