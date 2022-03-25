import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export function Animal() {
const [animalId, setAnimalId] = useState(0);

let params = useParams();

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
        <p>Animal ID: {params.id}</p>
        <button>Mata djuret med ID {animalId}</button>
        </div>
    )
} 