import { CheckCircle, Circle, Trash } from 'phosphor-react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
	id: string;
	description: string;
	isCompleted: boolean;
}

export function TodoItem({ id, description, isCompleted }: TodoItemProps) {
	return (
		<div className={styles.todo}>
			{isCompleted ? <CheckCircle size={24} className={styles.todoChecked} /> : <Circle size={24} className={styles.todoUnchecked}/>}
			<span className={styles.description}>
				{description}
			</span>
			<span className={styles.trash}>
				<Trash size={16}/>
			</span>
		</div>
	)
}