import Link from 'next/link';
import styles from './styles/not-found.module.css';

export default function NotFound() {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>404</h1>
                <h2 className={styles.subtitle}>Página não encontrada</h2>
                <p className={styles.description}>
                    Desculpe, esta página não está disponível no momento.
                </p>
                <Link href="./page.jsx" className={styles.homeButton}>
                    😡 Voltar para o site
                </Link>
            </div>
        </div>
    )
}