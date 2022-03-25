import axios from "axios"
import { useEffect, useState } from "react";
import { Animal } from "../interfaces/IAnimal"

export const Animals = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);

    useEffect(() => {
        if(animals.length > 0) return;
        
        axios
        .get<Animal[]>(
            "https://animals.azurewebsites.net/api/animals"
        )
        .then((response => {
            let animalsFromAPI =
            response.data.map((animal: Animal) => {
                return new Animal(animal.id, animal.imageUrl, animal.isFed, animal.lastFed, animal.latinName, animal.longDescription, animal.medicine, animal.name, animal.shortDescription, animal.yearOfBirth);
            });

            setAnimals(animalsFromAPI); 
        }));
    });

    return(
        <p>Got { animals.length } animals</p>
    )
}