import BaseType from "./BaseType"

type Card = BaseType & {
  cost: number,
  type: "skill" | "spell" | "system"

}

export default Card