import { useState } from "react"

function getRandomAnimal() {
    const animals = ['bird', 'cat', 'cow', 'dog', 'gator', 'horse'];
    return animals[Math.floor(Math.random() * animals.length)]
}

console.log(getRandomAnimal());

function App(){
    const [count, setState] = useState(0);

    const handleMouseMove = () => {
        setState(count+1)
    }
    return(
        <div>
            <button onClick={handleMouseMove} >Add animal</button>
            <div>Number of animals: {count}</div>
        </div>
    )
}

export default App