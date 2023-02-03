import TodoItem from "./TodoItem";

import classes from "./Todos.module.css";
import { TodosContext } from "../store/TodosContext";
import { useContext } from "react";

// interface TodosProps {
// 	// children: ReactNode;
// 	items: Todo[];
// 	onClickTodo: (todoId: string) => void;
// }

const Todos = () => {
	const todosCtx = useContext(TodosContext);
	return (
		<ul className={classes.todos}>
			{todosCtx.items.map((item) => (
				<TodoItem
					onClickTodo={todosCtx.removeTodo.bind(null, item.id)}
					key={item.id}
				>
					{item.text}
				</TodoItem>
				// <TodoItem key={item.id} text={item.text} />
			))}
		</ul>
	);
};

// const Todos: React.FC<{ items: Todo[] }> = (props) => {
// 	return (
// 		<ul>
// 			{props.items.map((item) => (
// 				<li key={item.id}>{item.text}</li>
// 			))}
// 		</ul>
// 	);
// };

export default Todos;
