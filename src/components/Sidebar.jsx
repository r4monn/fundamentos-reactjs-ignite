import { PencilLine } from 'phosphor-react'
import Avatar from './Avatar';

import styles from './Sidebar.module.css'

function Sidebar() {
 return (
  <aside className={styles.sidebar}>
    <img src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50" 
      className={styles.cover_img} />
    
    <div className={styles.profile}>
      <Avatar src="https://lh3.googleusercontent.com/a-/AFdZucrU8jDZYvnAYoBhOKob3-E9YjAyKqY1Iitn4jUR8Gg=s83-c-mo" />

      <strong>Ramon Dias</strong>
      <span>Web Developer</span>
    </div>

    <footer className={styles.footer}>
      <a href="#">
        <PencilLine size={18} />
        Editar seu perfil
      </a>
    </footer>
  </aside>
 )
}

export default Sidebar;