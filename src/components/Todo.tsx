import { useState, FormEvent, ChangeEvent } from 'react';
import { v4 as uuid } from 'uuid';
import { PlusCircle } from 'phosphor-react';

import { TodoItem } from './TodoItem';
import { EmptyState } from './EmptyState';
import styles from './Todo.module.css'

interface TodoItem {
	id: string;
	description: string;
	isCompleted: boolean;
}

const todosInitial = [
	{
		id: '12481948261982461982412',
		description: 'Ir para faculdade',
		isCompleted: false
	},
	{
		id: '394u90r3ur93u0r3u4r',
		description: 'Ler 2 capítulos do livro X',
		isCompleted: true
	},
	{
		id: '8435FY8934FY9734TF98',
		description: 'Fazer almoço',
		isCompleted: true
	}
]

const INITIAL_COUNT_COMPLETE_TODOS = 0;

export function Todo() {
	const [todos, setTodos] = useState<TodoItem[]>(todosInitial);
	const [todoDescription, setTodoDescription] = useState('');

	function handleSubmitForm(event: FormEvent) {
		event.preventDefault();
	}

	function handleChangeTodoDescription(event: ChangeEvent<HTMLInputElement>) {
		const value = event.target.value;

		setTodoDescription(value);
	}

	function handleCreateNewTodo() {
		const newTodo = {
			id: uuid(),
			description: todoDescription,
			isCompleted: false
		};

		setTodos(state => [...state, newTodo]);
		setTodoDescription('');
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
	const todosCount = todos.length;
	const todoDescriptionHasValue = todoDescription.length > 0;
	
	const countOfAllCompletedTodos = todos.reduce((total, { isCompleted }) => {
		if (isCompleted) {
			total += 1;

			return total
		}

		return total;
	}, INITIAL_COUNT_COMPLETE_TODOS); 

	return (
		<div className={styles.todo}>
			<form className={styles.form} onSubmit={handleSubmitForm}>
				<input 
					type="text"
					placeholder="Adicione uma nova tarefa"
					onChange={handleChangeTodoDescription}
					value={todoDescription}
				/>
				<button 
					type="submit"
					onClick={handleCreateNewTodo}
					disabled={!todoDescriptionHasValue}
				>
					Criar
					<PlusCircle size={20} />
				</button>
			</form>

			<div className={styles.content}>
				<div className={styles.counter}>
					<span className={styles.createdTodosCounter}>
						Tarefas criadas
						<span>{todosCount}</span>
					</span>

					<span className={styles.completedTodosCounter}>
						Concluídas
						<span>
							{todosCount ? `${countOfAllCompletedTodos} de ${todosCount}` : 0}
						</span>
					</span>
				</div>
				{hasTodos ? getTodosItems() : <EmptyState/>}
			</div>
		</div>
	)
}