import Card from "../types/Card.type"

const TouhouCard: React.FC<Card> = ({name, cost, imageURL}): React.JSX.Element => {
  return (
    <>
      <h2>{name}</h2>
      <h3>{cost}</h3>
      <img src={imageURL}></img>
    </>
  )
}

export default TouhouCard