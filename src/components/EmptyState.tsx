import completedTodosCounter from '../assets/empty-state.svg';
import styles from './EmptyState.module.css'

export function EmptyState() {
	return (
		<div className={styles.emptyStateContainer}>
			<img
				className={styles.emptyStateImage}
				src={completedTodosCounter} 
				alt="Imagem relativa a inexistência de itens criados" 
			/>
			<span className={styles.emptyStateHelpText}>
				Você ainda não tem tarefas cadastradas
				<span className={styles.emptyStateActionText}>
					Crie tarefas e organize seus itens a fazer
				</span>
			</span>			
		</div>
	)
}