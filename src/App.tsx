import PokeData from './components/PokeData'
import Header from './components/Header'
import './App.css'

function App() {
  const counter = 1;
  const highscore = 1;

  const clickHandler = () => {
    console.log("clicked")
    
  }

  return (
  <>
    <Header counter={counter} highscore={highscore}/>
    <PokeData handler={clickHandler}/>
  </>  
  )
}

export default App
