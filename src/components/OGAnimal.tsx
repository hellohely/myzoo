import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export function Animal() {
const [animalId, setAnimalId] = useState(0);

let params = useParams();

const animals = JSON.parse(localStorage.getItem("animals") || '[]');
let thisAnimal = animals.find((animal: { id: number; }) => animal.id == animalId);
//console.log(thisAnimal);

useEffect(() => {
    if (params.id) {
    setAnimalId(parseInt(params.id));
    }
}, [])

useEffect(() => {
    //console.log("Get animal with id", animalId)
    
    
}, [animalId]);

function feedAnimal() {
    thisAnimal.isFed = true;
    thisAnimal.lastFed = new Date();
    let storeAnimalList = JSON.stringify(animals);
    localStorage.setItem("animals", storeAnimalList);
    console.log(thisAnimal.name, "är senast matad: ", thisAnimal.lastFed);

}



    return(
        <div>
        <Link to={"/"}>Gå tillbaka till startsidan</Link>
        <img src={thisAnimal?.imageUrl}></img>
        <p>Välkommen till {thisAnimal?.name}!</p>
        <p>{thisAnimal?.shortDescription}</p>
     
        <button onClick={feedAnimal}>Mata {thisAnimal?.name}</button>
        <p>{thisAnimal.name} är senast matad: {thisAnimal.lastFed}</p>

        
        </div>
    )
} 