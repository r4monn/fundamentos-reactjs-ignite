import styles from './Comment.module.css';
import { ThumbsUp, Trash } from 'phosphor-react';
import Avatar from './Avatar';
import { useState } from 'react';

function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount(likeCount + 1)
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://lh3.googleusercontent.com/a-/AFdZucrU8jDZYvnAYoBhOKob3-E9YjAyKqY1Iitn4jUR8Gg=s83-c-mo" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Ramon Dias</strong>
              <time title='11 de Maio às 08:13h' dateTime='2022-05-11 08:13:38'>Cerca de 1h atrás</time>
            </div>

            <button onMouseDown={handleDeleteComment} title='Deletar comentário'>
              <Trash size={22} />
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
              Aplaudir  <span>{likeCount}</span>
          </button>
      </footer>
      </div>

      
    </div>
  )
}

export default Comment;