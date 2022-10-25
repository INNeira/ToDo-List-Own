import React from "react";

// Chakra UI
import {
  HStack,
  List,
  ListItem,
  Button,
  Box,
  Text,
  Flex,
} from "@chakra-ui/react";

export const ToDoList = ({ todos = [], handleConfirm, deleteTodo }) => {
  return (
    <Flex
      bg={"blue.200"}
      direction={"row"}
      p={5}
      margin={"auto"}
      mt={6}
      minH={"sm"}
      boxShadow={"0px 4px 4px rgba(0, 0, 0, 0.25)"}
    >
      <List w={"100%"}>
        {todos.map((todo) => (
          <Box key={todo.id} mb={4}>
            <ListItem>
              <Flex className="asd" justifyContent={"space-around"}>
                <Box minW={40}>
                  <Text
                    fontSize="xl"
                    className={todo.confirmed ? "ready-todo" : ""}
                  >
                    {todo.text}
                  </Text>
                </Box>

                <Flex gap={4}>
                  <Button onClick={() => handleConfirm(todo.id)}>
                    {" "}
                    Ready{" "}
                  </Button>
                  <Button
                    onClick={() => deleteTodo(todo.id)}
                    className="deleteTodo"
                  >
                    {" "}
                    Delete{" "}
                  </Button>
                </Flex>
              </Flex>
            </ListItem>
          </Box>
        ))}
      </List>
    </Flex>
  );
};
