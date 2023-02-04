import { useState } from "react"
import AnimalShow from "./AnimalShow";

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)]
}

console.log(getRandomAnimal());

function App(){
    const [animals, setAnimals] = useState([]);

    const handleClick = () => {
        setAnimals([...animals, getRandomAnimal()])
    }

    const renderedAnimals = animals.map((animal, index, value) => {
        return <AnimalShow type={animal} value={index} />
    })
    return(
        <div>
            <button onClick={handleClick} >Add animal</button>
            <div>{renderedAnimals}</div>
        </div>
    )
}

export default App