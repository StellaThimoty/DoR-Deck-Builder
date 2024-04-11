import reimuSkills from "./cards/reimu.skills.json"
import chars from './cards/chars.json'
import { Heading } from '@chakra-ui/react'
import TouhouCharacters from "./components/TouhouCharacters"
import TouhouCard from "./components/TouhouCard"
import './App.css'

function App() {

  return (
    <>
      <Heading as='h1' size='2xl'>DoR Deckbuilder</Heading>
      <Heading as='h2' size='lg'>Choose your character</Heading>

      {reimuSkills.map((card) => (
      <TouhouCard
      key={["reimu", card.name].join(":")}
      name={card.name}
      cost={card.cost}
      type="skill"
      imageURL={card.imageURL}
      />
      ))}
      {chars.map((char) => (
      <TouhouCharacters
        key={char.name}
        name={char.name}
        imageURL={char.imageURL}
      />
      ))}

    </>
  )
}

export default App
