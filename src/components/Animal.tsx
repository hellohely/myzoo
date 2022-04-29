import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAnimal } from "../interfaces/IAnimal";

export function Animal() {
  const [animalId, setAnimalId] = useState(0);
  const [animal, setAnimal] = useState<IAnimal>();
  let params = useParams();

  const thisAnimal = JSON.parse(localStorage.getItem("animals") || "[]").find(
    (animal: { id: number }) => animal.id == animalId
  );

  useEffect(() => {
    if (params.id) {
      setAnimalId(parseInt(params.id));
    }
  }, []);

  useEffect(() => {
    setAnimal(thisAnimal);
  }, [animalId]);

  function feedAnimal() {
    console.log(thisAnimal.name, " är matad");
  }

  return (
    <div>
      <Link to={"/"}>Gå tillbaka till startsidan</Link>
      <img src={thisAnimal?.imageUrl}></img>
      <p>Välkommen till {animal?.name}!</p>
      <p>{animal?.shortDescription}</p>
      <button onClick={feedAnimal}>Mata {animal?.name}</button>
    </div>
  );
}
