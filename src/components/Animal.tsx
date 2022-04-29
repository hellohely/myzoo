import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { IAnimal } from "../interfaces/IAnimal";

export function Animal() {
  const [animalId, setAnimalId] = useState(0);
  const [animal, setAnimal] = useState<IAnimal>();
  let animals = JSON.parse(localStorage.getItem("animals") || "");
  let thisAnimal = animals.find(
    (animal: { id: number }) => animal.id == animalId
  );

  let params = useParams();

  useEffect(() => {
    if (params.id) {
      setAnimalId(parseInt(params.id));
    }
  }, []);

  useEffect(() => {
    setAnimal(thisAnimal);
  }, [animalId]);

  let isFed: boolean = false;

  let isFedHtml = <p>{animal?.name} är hungrig!</p>;

  if (animal?.isFed) {
    isFed = true;
    isFedHtml = (
      <p>
        {animal?.name} matades senast {animal.lastFed.toLocaleString()}
      </p>
    );
  }

  function feedAnimal() {
    if (animal && !animal.isFed) {
      thisAnimal.isFed = true;
    }
    if (animal?.lastFed) {
      thisAnimal.lastFed = new Date();
    }
    localStorage.setItem("animals", JSON.stringify(animals));
    setAnimal(thisAnimal);
  }

  return (
    <div>
      <Link to={"/"}>Gå tillbaka till startsidan</Link>
      <img src={thisAnimal?.imageUrl}></img>
      <p>Välkommen till {animal?.name}!</p>
      <p>{animal?.shortDescription}</p>
      {isFedHtml}
      <button disabled={isFed} onClick={feedAnimal}>
        Mata {animal?.name}
      </button>
    </div>
  );
}
