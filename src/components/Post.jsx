import styles from './Post.module.css';

export function Post() {
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/luccasmesquita.png" />
                    <div className={styles.authorInfo}>
                        <strong>Luccas Mesquita</strong>
                        <span>Front-end Developer</span>
                    </div>
                </div>
                <time title='8 de novembro às 9:12' dateTime='2024-11-08 09:12:40'>Publicado há 1h</time>
            </header>

            <div className={styles.content}>
               <p> Fala galeraa 👋 </p>

               <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀 </p>

               <p>👉<a href="#">{' '} jane.design/doctorcare </a></p>

               <p><a href="#">#novoprojeto</a> {' '}
                <a href="">#nlw </a> {' '}
                <a href="">#rocketseat </a></p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea 
                    placeholder='Deixe um comentário'
                />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>
        </article>
    );
}