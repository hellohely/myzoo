import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Animal } from "../interfaces/IAnimal"

export const Animals = () => {
    const [animals, setAnimals] = useState<Animal[]>([]);

    let lis = animals.map((animal, i) => {
        return (
        <li key={i}>
            <Link to={`/animal/${animal.id}`}>{animal.name}</Link>
            <img src={animal.imageUrl}></img>
            </li>);
    });

    function needsFood() {
        animals.map((animal,i) => {
        if (animal.isFed = false) {
            console.log(animal.name + " måste matas!"); 
        };
    })
    };

    useEffect(() => {
        let animalsString : string = localStorage.getItem('animals') || '[]';
        let listOfAnimals : Animal[] = JSON.parse(animalsString);

        console.log("List of animals: ", listOfAnimals);

        needsFood();

        if(animals.length > 0) return;
        if (listOfAnimals.length > 0) return;

        axios
        .get<Animal[]>(
            "https://animals.azurewebsites.net/api/animals"
        )
        .then((response => {
            listOfAnimals =
            response.data.map((animal: Animal) => {
                return new Animal(
                    animal.id, 
                    animal.imageUrl, 
                    animal.isFed, 
                    animal.lastFed, 
                    animal.latinName, 
                    animal.longDescription, 
                    animal.medicine, 
                    animal.name, 
                    animal.shortDescription, 
                    animal.yearOfBirth);
            });

            localStorage.setItem("animals", JSON.stringify(listOfAnimals));
            const storedAnimals = JSON.parse(localStorage.getItem("animals") || '[]');
            setAnimals(storedAnimals);
           
            
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