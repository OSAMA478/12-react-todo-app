import React, { useContext } from "react";
import classes from "./NewTodo.module.css";
import { useRef } from "react";
import { TodosContext } from "../store/TodosContext";
// interface NewTodoProps {
// 	onAddTodo: (text: string) => void;
// }

const NewTodo = () => {
	const todosCtx = useContext(TodosContext);
	const todoTextInputRef = useRef<HTMLInputElement>(null);
	const submitHandler = (event: React.FormEvent) => {
		event.preventDefault();

		const enteredText = todoTextInputRef.current!.value;

		if (enteredText?.length === 0) {
			// throw error
			return;
		}

		todosCtx.addTodo(enteredText);
	};
	return (
		<form className={classes.form} onSubmit={submitHandler}>
			<label htmlFor="text">todo text</label>
			<input ref={todoTextInputRef} type="text" id="text" />
			<button>add todo</button>
		</form>
	);
};

export default NewTodo;
