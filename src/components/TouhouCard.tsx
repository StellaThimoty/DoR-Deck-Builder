import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import CardT from "../types/Card.type"

const TouhouCard: React.FC<CardT> = ({name, cost, imageURL}): React.JSX.Element => {
  const [counter, setCounter] = useState(0)
  const handleAdd = () => {
    counter >=4 ? setCounter(4) : setCounter(counter + 1)
  }
  const handleMinus = () => {
    counter <= 0 ? setCounter(0) : setCounter(counter - 1)
  }
  return (
    <Card className="w-[180px] dark">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent className="flex items-center">
        <img src={imageURL}></img>
        <p>&nbsp;{cost} cost</p>
      </CardContent>
      <CardFooter className="flex">
        <Button size="icon" onClick={handleAdd}>
          <FaPlusSquare/>
        </Button>
        &nbsp;
        <Button size="icon">
          {counter}
        </Button>
        &nbsp;
        <Button size="icon" onClick={handleMinus}>
          <FaMinusSquare/>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default TouhouCard