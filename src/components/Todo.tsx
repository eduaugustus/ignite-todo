import { useState, FormEvent } from 'react';
import { PlusCircle } from 'phosphor-react';

import { TodoItem } from './TodoItem';
import { EmptyState } from './EmptyState';
import styles from './Todo.module.css'

interface TodoItem {
	id: string;
	description: string;
	isCompleted: boolean;
}

export function Todo() {
	const [todos, setTodos] = useState<TodoItem[]>([]);

	function handleSubmitForm(event: FormEvent) {
		event.preventDefault();
	}

	function getTodosItems() {
		return todos.map(todo => (
			<TodoItem 
				key={todo.id}
        id={todo.id}
				description={todo.description}
				isCompleted={todo.isCompleted}
			/>
		))
	}

	const hasTodos = todos.length > 0;

	return (
		<div className={styles.todo}>
			<form className={styles.form} onSubmit={handleSubmitForm}>
				<input 
					type="text"
					placeholder="Adicione uma nova tarefa"
				/>
				<button type="submit">
					Criar
					<PlusCircle size={20} />
				</button>
			</form>

			<div className={styles.content}>
				<div className={styles.counter}>
					<span className={styles.createdTodosCounter}>
						Tarefas criadas
						<span>0</span>
					</span>

					<span className={styles.completedTodosCounter}>
						Concluídas
						<span>0</span>
					</span>
				</div>
				{hasTodos ? getTodosItems() : <EmptyState/>}
			</div>
		</div>
	)
}