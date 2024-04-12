import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Character from "../types/Character.type"
import { Key } from "react"

const TouhouCharacters: React.FC<Character[]> = (chars) => {
  return (
    <Carousel>
      <CarouselContent>
        {chars.map((char: Character , index: Key) => (
          <CarouselItem className="basis-1/4" key={index}>
            <img src={char.imageURL}></img>
            <h3>{char.name}</h3>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
    )
}
export default TouhouCharacters 