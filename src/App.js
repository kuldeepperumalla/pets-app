import { useState } from "react"
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