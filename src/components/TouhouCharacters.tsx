import Character from "../types/Character.type"

const TouhouCharacters: React.FC<Character> = ({name, imageURL}): React.JSX.Element => {
  return (
    <>
    <h1>{name}</h1>
    <img src={imageURL} alt={name}/>
    </>
  )
}
export default TouhouCharacters 