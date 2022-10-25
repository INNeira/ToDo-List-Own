import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { ToDoList } from "./components/ToDoList";

// Chakra UI
import { Box, Container, Flex, Heading, useToast } from "@chakra-ui/react";

function App() {
  const [todo, setTodo] = useState({ value: "" });
  const [todos, setTodos] = useState([]);
  const toast = useToast();

  const { value } = todo;

  const handleTodo = (event) => {
    setTodo({ value: event.target.value });
  };

  const addTodo = (event) => {
    event.preventDefault();
    if (value.trim() === "") {
      toast({
        title: "Error",
        description: "No podes mandar las cosas vacias vago",
        status: "error",
        position: 'top',
        duration: 9000,
        isClosable: true,
      });
      return;
    }
    setTodos([
      ...todos,
      { text: value, confirmed: false, id: Math.random() * 1000 },
    ]);
    setTodo({ value: "" });
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  const handleConfirm = (itemId) => {
    console.log(itemId);
    setTodos(
      todos.map((item) => {
        if (item.id === itemId) {
          return { ...item, confirmed: !item.confirmed };
        }
        return item;
      })
    );

    //display='flex' alignItems='center' justifyContent='center'
  };

  return (
    <Box bg={"green.100"} w="100%" minH="100vh" flexDirection={"column"}>
      <Flex alignItems="center" justifyContent="center" bg="blue.400" h="sm">
        <Box pb={40}>
          <Heading
            fontFamily={"Montserrat"}
            fontWeight={700}
            fontSize={"40px"}
            color="white"
          >
            Welcome to the ToDo List
          </Heading>
        </Box>
      </Flex>
      <Box
        bg={"blue.50"}
        w={"4xl"}
        minH={"lg"}
        margin={"auto"}
        mt={-40}
        borderRadius={12}
        paddingY={10}
        paddingX={36}
      >
        <Form todo={todo} handleTodo={handleTodo} addTodo={addTodo} />

        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          handleConfirm={handleConfirm}
        />
      </Box>
    </Box>
  );
}

export default App;
