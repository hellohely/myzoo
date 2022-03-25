import axios from "axios"
import { useEffect, useState } from "react";
import { Animal } from "../interfaces/IAnimal"

export const Animals = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);
    let checkHunger: string = "";

    let lis = animals.map((animal, i) => {
        return (
        <li key={i}>
            <h3>{animal.name}</h3>
            <img src={animal.imageUrl}></img>
            </li>);
    });

    function needsFood() {
        animals.map((animal,i) => {
        if (animal.isFed = false) {
            console.log(animal.name + " måste matas!"); 
        }
        else {
            console.log(animal.name + " är mätt.");    
        };
    })
    };

    useEffect(() => {
        localStorage.setItem('animals', JSON.stringify(animals));
        needsFood();
        

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
        <div>
            <h1>Välkommen till Djurparken!</h1>
            <ul>
                {lis}
            </ul>
        
        </div>
    )
}