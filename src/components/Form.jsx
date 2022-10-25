import React from 'react'

// Chakra UI
import {
  Box,
  HStack,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react'

function Form({ todo, handleTodo, addTodo }) {
  return (
    <FormControl>
      <HStack>
        <FormLabel>
          ToDo:
        </FormLabel>
        <Input value={todo.value} onChange={handleTodo} id="todo" type="text"></Input>
        <Button onClick={addTodo}>Add ToDo</Button>
      </HStack>
    </FormControl>
  )
}

export default Form