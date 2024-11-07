import {Post} from './Post';
import {Header} from './components/Header';
import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <Post 
        author="Luccas Mesquita" 
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nisi nulla, quis saepe exercitationem assumenda provident sit rerum asperiores ipsum omnis. Quam facilis, eligendi quo autem repudiandae necessitatibus maxime deleniti?" 
      />
      <Post
        author="Diego Fernandes"
        content="Um novo post muito legal"
      />
    </div>
  )
}

