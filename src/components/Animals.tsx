import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../interfaces/IAnimal"

export function Animals() {
    const [animals, setAnimals] = useState<IAnimal[]>([]);

    //Hämta djur från API

    //Spara lista med djur i Local Storage

    //Presentera djur med namn och kort beskrivning

    //Skapa länk för att gå till djurets egen sida


    return(
        <div>
            <h1>Välkommen till Djurparken!</h1>
            <ul>
            </ul>
        
        </div>
    )
}