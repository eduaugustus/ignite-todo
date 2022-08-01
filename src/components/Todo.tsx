import { PlusCircle } from 'phosphor-react';
import styles from './Todo.module.css'

export function Todo() {
	return (
		<div className={styles.todo}>
			<form className={styles.form}>
				<input 
					type="text"
					placeholder="Adicione uma nova tarefa"
				/>
				<button type="submit">
					Criar
					<PlusCircle size={16} />
				</button>
			</form>
			{/* TodoList */}
		</div>
	)
}