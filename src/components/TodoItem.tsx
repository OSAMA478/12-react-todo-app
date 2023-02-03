import { ReactNode } from "react";
import classes from "./TodoItem.module.css";
interface TodoItemProps {
	children: ReactNode;
	onClickTodo: () => void;
}

const TodoItem = (props: TodoItemProps) => {
	return (
		<li className={classes.item} onClick={props.onClickTodo}>
			{props.children}
		</li>
	);
};
// const TodoItem: React.FC<{ text: string }> = (props) => {
// 	return <li>{props.text}</li>;
// };

export default TodoItem;
