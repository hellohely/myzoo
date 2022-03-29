import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export function Animal() {
const [animalId, setAnimalId] = useState(0);

let params = useParams();

const listOfAnimals = JSON.parse(localStorage.getItem("animals") || '[]');
let thisAnimal = listOfAnimals.find((animal: { id: number; }) => animal.id == animalId);
console.log(thisAnimal);

useEffect(() => {
    if (params.id) {
    setAnimalId(parseInt(params.id));
    }
}, [])

useEffect(() => {
    console.log("Get animal with id", animalId)
    
    
}, [animalId]);


    return(
        <div>
        <img src={thisAnimal?.imageUrl}></img>
        <p>Välkommen till {thisAnimal?.name}!</p>
        <button>Mata {thisAnimal?.name}</button>
        </div>
    )
} 