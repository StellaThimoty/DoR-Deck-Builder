'use client'
import { useState } from "react"
import {
  Flex,
  Box,
  Image,
  useColorModeValue,
  Icon,
} from '@chakra-ui/react'
import { FaPlusSquare, FaMinusSquare } from 'react-icons/fa'
import Card from "../types/Card.type"

const TouhouCard: React.FC<Card> = ({name, cost, imageURL}): React.JSX.Element => {
  const [counter, setCounter] = useState(0)
  const handleAdd = () => {
    counter >=4 ? setCounter(4) : setCounter(counter + 1)
  }
  const handleMinus = () => {
    counter <= 0 ? setCounter(0) : setCounter(counter - 1)
  }
  return (
    <Flex p={2} alignItems="center" justifyContent="left">
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW="sm"
        borderWidth="1px"
        shadow="lg"
        position="relative">
        <Image src={imageURL} alt={name} boxSize='220px'/>

        <Box p={3}>
          <Flex mt="1">
            <Box
              fontSize="1l"
              fontWeight="semibold"
              as="p"
              lineHeight="tight"
              isTruncated>
              {name} - {cost}&nbsp;&nbsp;
            </Box>
                <Icon onClick={handleAdd} as={FaPlusSquare} h={3} w={3} alignSelf={'center'} />
                <Box fontSize="1l" fontWeight="semibold" as="p" >&nbsp;{counter}&nbsp;</Box>
                <Icon onClick={handleMinus} as={FaMinusSquare} h={3} w={3} alignSelf={'center'} />
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export default TouhouCard