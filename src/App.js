import './App.css';
import { useState, useEffect } from "react"

/////////////////////
// Import Components
/////////////////////

import Header from "./components/Header"
import Body from './components/Body';


/////////////////////
// App
/////////////////////

function App() {
  
    
    const [starship, setStarship] = useState(null)
    
    const getStarship = async () => {

      // making the api call
      const res = await fetch (
        `https://swapi.dev/api/starships/`
      )

      // converting the response to js objec
      const data = await res.json()

      // updating the state
      setStarship(data)

      console.log(data)

    }

    useEffect(() => {getStarship()}, [])
    
    // map    //  use ? to check if the object is there
    const allStarshipData = starship?.results?.map((eachShip, index) => {
      // or starship && starship.resulte.map(shipElement)
      console.log(eachShip)
      return  (
        
        <Body
          name={eachShip.name} 
          passengers={eachShip.passengers} 
          manufacturer={eachShip.manufacturer}  
          starship_class={eachShip.starship_class}
          key={index}/>
        
      )
    })
      
    // return result of map

    
    return (
      <>
      <Header/>
      <div className='cards-container'>
      {allStarshipData}
      </div>
      </>
    )

    
    
}
    


export default App;