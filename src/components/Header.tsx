import logo from '../assets/ignite-logo.svg';
import styles from './Header.module.css';

export function Header() {
	return (
		<header className={styles.header}>
			<img src={logo} alt='Logo tipo do ignite'/>
		</header>
	)
}