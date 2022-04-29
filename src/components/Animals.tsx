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
      });
  }, []);



  //Presentera djur med namn och kort beskrivning

  //Skapa länk för att gå till djurets egen sida

  return (
    <div>
      <h1>Välkommen till Djurparken!</h1>
      <ul></ul>
    </div>
  );
}
