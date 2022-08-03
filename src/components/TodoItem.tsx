import { CheckCircle, Circle, Trash } from 'phosphor-react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
	id: string;
	description: string;
	isCompleted: boolean;
	onCheck: (id: string) => void;
	onUnCheck: (id: string) => void;
	onDelete: (id: string) => void;
}

export function TodoItem({ 
	id, 
	description, 
	isCompleted,
	onCheck,
	onUnCheck,
  onDelete
}: TodoItemProps) {

	function getContainerClassName() {
		return isCompleted ? styles.todo : `${styles.todo} ${styles.todoBorder}`;
	}

	function getDescriptionClassName() {
		return isCompleted ? styles.todoDescriptionCompleted : styles.todoDescription;
	}

	function handleCheckTodo() {
		onCheck(id);
	}

	function handleUnCheckTodo() {
		onUnCheck(id);
	}

	function handleDeleteTodo() {
		onDelete(id);
	}

	function getCheckIcon() {
		if (isCompleted) {
      return (
				<CheckCircle 
					size={24} 
					onClick={handleUnCheckTodo}
					className={styles.todoChecked} 
				/>
			);
		}

		return (
			<Circle 
				size={24} 
				onClick={handleCheckTodo}
				className={styles.todoUnchecked}
			/>
		);
	}

	return (
		<div className={getContainerClassName()}>
			{getCheckIcon()}
			<span className={getDescriptionClassName()}>
				{description}
			</span>
			<span className={styles.trash}>
				<Trash size={16} onClick={handleDeleteTodo}/>
			</span>
		</div>
	)
}