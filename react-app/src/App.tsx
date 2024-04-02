import Button from "./components/Exercise";


function App() {
  const clickHandler = () => {
    console.log("clicked")
  }

  return (
    <Button clicked={clickHandler} color="grey">
      Click me"
    </Button>

  )
}

export default App;



