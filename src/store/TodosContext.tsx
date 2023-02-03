import { createContext } from "react";
import Todo from "../models/todo";
import { useState, ReactNode } from "react";

interface TodosContextProviderProps {
	children: ReactNode;
}

export const TodosContext = createContext<{
	items: Todo[];
	addTodo: (text: string) => void;
	removeTodo: (id: string) => void;
}>({
	items: [],
	addTodo: (text: string) => {},
	removeTodo: (id: string) => {},
});

const TodosContextProvider = (props: TodosContextProviderProps) => {
	const [todos, setTodos] = useState<Todo[]>([]);

	const addTodoHandler = (todoText: string) => {
		const newTodo = new Todo(todoText);
		setTodos((prev) => {
			return prev.concat(newTodo);
		});
	};

	const removeTodoHandler = (todoId: string) => {
		setTodos((prevTodo) => {
			return prevTodo.filter((todo) => todo.id !== todoId);
		});
	};

	const contextValue = {
		items: todos,
		addTodo: addTodoHandler,
		removeTodo: removeTodoHandler,
	};

	return (
		<TodosContext.Provider value={contextValue}>
			{props.children}
		</TodosContext.Provider>
	);
};

export default TodosContextProvider;
