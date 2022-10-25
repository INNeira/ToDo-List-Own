import React from "react";

// Chakra UI
import {
  Box,
  HStack,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  VStack,
  Flex,
} from "@chakra-ui/react";

function Form({ todo, handleTodo, addTodo }) {
  return (
    <FormControl>
      <VStack>
        <Flex w={"lg"} gap={4}>
          <Input
            w={"xs"}
            bg={'white'}
            _focus={{
              borderInlineColor: "blue.800"
            }}
            value={todo.value}
            onChange={handleTodo}
            id="todo"
            type="text"
          ></Input>
          <Button
            bg={"blue.600"}
            color={"white"}
            borderRadius={12}
            _hover={{
              background: "blue.800",
              color: "white",
            }}
            onClick={addTodo}
          >
            Add ToDo
          </Button>
        </Flex>
      </VStack>
    </FormControl>
  );
}

export default Form;
