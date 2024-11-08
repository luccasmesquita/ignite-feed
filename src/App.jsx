import {Header} from './components/Header';
import {Post} from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
      <Sidebar />
        <main>
          <Post 
            author="Luccas Mesquita" 
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi nulla, quis saepe exercitationem assumenda provident sit rerum asperiores ipsum omnis. Quam facilis, eligendi quo autem repudiandae necessitatibus maxime deleniti?" 
          />
          <Post
            author="Diego Fernandes"
            content="Um novo post muito legal"
          />
        </main>
      </div>

    </div>
  )
}

