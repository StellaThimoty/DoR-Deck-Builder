import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle
} from "@/components/ui/card"

type CharacterProps = {
  characters: Character[]
} 
import Character from "../types/Character.type"

const TouhouCharacters = ({characters}:CharacterProps) => {
  return (
    <Carousel opts={{
      loop:true
    }}>
      <CarouselContent>
        {characters.map((char: Character) => (
          <CarouselItem className="basis-1/4" key={char.name}>
              <Card>
                <CardHeader>
                <img src={char.imageURL}></img>
                </CardHeader>
                <CardContent>
                  <CardTitle>{char.name} <Button>Select girl</Button> </CardTitle>
                </CardContent>
              </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious/>
      <CarouselNext/>
    </Carousel>
    )
}
export default TouhouCharacters 