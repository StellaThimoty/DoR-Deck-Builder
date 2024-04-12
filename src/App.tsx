import reimuSkills from "./cards/reimu.skills.json"
// import TouhouCharacters from "./components/TouhouCharacters"
// import Footer from "./components/Footer"
import TouhouCard from "./components/TouhouCard"
import Character from "./types/Character.type"
import { useState, useEffect } from "react"

function App() {
  const [character, characterSet] = useState<Character[]>([])

  useEffect(() => {
    fetch('http://localhost:10800/chars.json')
    .then(resp => resp.json())
    .then(data => characterSet(data))
  }, [])
  return (
    <>
      <div>
        <h1>DoR Deckbuilder</h1>
        <h2>Choose your character</h2>
        {reimuSkills.map((card) => (
        <TouhouCard
        key={["reimu", card.name].join(":")}
        name={card.name}
        cost={card.cost}
        type="skill"
        imageURL={card.imageURL}
        />
        ))}
        {/* <TouhouCharacters chars={character}/> */}
      </div>
      {/* <Footer/> */}
    </>
  )
}

export default App
