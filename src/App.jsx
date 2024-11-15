import {Header} from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';



  const posts = [
    {
      id: 1,
      author: {
        avatarUrl: 'https://github.com/luccasmesquita.png',
        name: 'Luccas Mesquita',
        role: 'Front-end Developer'
      },
      content: [
        {type: 'paragraph', content:'Fala galeraa 👋'},
        {type: 'paragraph', content:'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content:'jane.design/doctorcare'},
      ],
      publishedAt: new Date('2024-11-09 16:00:00')
    },
    {
      id: 2,
      author: {
        avatarUrl: 'https://github.com/maykbrito.png',
        name: 'Mayk Brito',
        role: 'Web Developer'
      },
      content: [
        {type: 'paragraph', content:'Fala galeraa 👋'},
        {type: 'paragraph', content:'Acabei de finalizar meu portifa. Foi um baita desafio criar todo o design e codar. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
        {type: 'link', content:'maykbrito/doct'},
      ],
      publishedAt: new Date('2024-11-08 19:00:00')
    },
    {
      id: 3,
      author: {
        avatarUrl: 'https://github.com/diego3g.png',
        name: 'Diego Fernandes',
        role: 'CTO @Rocketseat'
      },
      content: [
        {type: 'paragraph', content:'Fala Pessoal 👋'},
        {type: 'paragraph', content:'Finalmente finalizei meu novo site/portfólio. Foi um baita desafio criar todo o design e codar na unha, mas consegui 💪🏻'},
        {type: 'link', content:'diego3g.design'},
      ],
      publishedAt: new Date('2024-11-06 10:00:00')
    },
  ];

  export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <Sidebar />
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content} 
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>

    </div>
  )
}

