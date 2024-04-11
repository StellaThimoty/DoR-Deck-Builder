type DeckProps = {
  deckname: string,
  quantity: number
}

const TouhouDeck = ({deckname, quantity}:DeckProps) => {
  return (
    <>
      <h1>{deckname}</h1>
      <h1>{quantity}</h1>
    </>
  )
}

export default TouhouDeck