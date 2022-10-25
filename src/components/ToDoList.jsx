import React from 'react'

// Chakra UI
import {
  HStack,
  List,
  ListItem,
  Button,
  Box,
  Text
} from '@chakra-ui/react'

export const ToDoList = ({ todos = [], handleConfirm, deleteTodo }) => {
  return (

    <List>
      {todos.map((todo) =>
        <Box key={todo.id}>
          <ListItem >
            <HStack>
              <Text fontSize='xl' className={todo.confirmed ? 'ready-todo' : ''}>{todo.text}</Text>
              <Button onClick={() => handleConfirm(todo.id)}> Ready </Button>
              <Button onClick={() => deleteTodo(todo.id)} className="deleteTodo"> Delete </Button>
            </HStack>
          </ListItem>
        </Box>)}
    </List>
  )
}
