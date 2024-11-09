import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
    return(
        <div className={styles.comment}>
            <img src="https://github.com/luccasmesquita.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContetent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Luccas Mesquita</strong>
                            <time title='8 de novembro às 9:12' dateTime='2024-11-08 09:12:40'>Certa de 1h atrás</time>
                        </div>
                        <button title='Deletar comentário'>
                            <Trash size={20} />
                        </button>
                    </header>

                    <p>Muito bom devon, parabéns</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}