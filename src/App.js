function App(){
    const handleMouseMove = () => {
        console.log(`button was clicked`)
    }
    return(
        <div>
            <button onMouseMove={handleMouseMove} >Add animal</button>
        </div>
    )
}

export default App