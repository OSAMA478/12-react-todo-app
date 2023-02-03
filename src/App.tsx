import "./App.css";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import TodosContextProvider from "./store/TodosContext";
import { useState } from "react";

function App() {
	return (
		<TodosContextProvider>
			<NewTodo />
			<Todos />
		</TodosContextProvider>
	);
}

export default App;
