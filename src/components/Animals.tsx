import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IAnimal } from "../interfaces/IAnimal";

export function Animals() {
  const [animals, setAnimals] = useState<IAnimal[]>([]);

  useEffect(() => {
    //Hämta djur från API
    axios
      .get<IAnimal[]>("https://animals.azurewebsites.net/api/animals")
      .then((response) => {
        //Spara lista med djur i Local Storage
        if (!localStorage.getItem("animals")) {
          localStorage.setItem("animals", JSON.stringify(response.data));
        }

        //Använd Local Storage-listan till setAnimals
        setAnimals(JSON.parse(localStorage.getItem("animals") || ""));
      });
  }, []);

  //Skapa html för att presentera djur med namn och kort beskrivning
  let lis = animals.map((animal, i) => {
    return (
      //Skapa länk för att gå till djurets egen sida
      <li key={i}>
        <Link to={`/animal/${animal.id}`}>{animal.name}</Link>
        <img src={animal.imageUrl}></img>
        <p>{animal.shortDescription}</p>
      </li>
    );
  });

  return (
    <div>
      <h1>Välkommen till Djurparken!</h1>
      <ul>
          {lis}
      </ul>
    </div>
  );
}
