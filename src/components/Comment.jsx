import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/GustavoeDev.png" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <div className={styles.commentInfo}>
            <div className={styles.commentAuthor}>
              <strong>Gustavo Emanuel</strong>
              <span>Há cerca de 2h</span>
            </div>

            <button onClick={handleDeleteComment} title="Deletar comentário">
              <Trash size={24} />
            </button>
          </div>
          <p>{content}</p>
        </div>
        <footer className={styles.footerClap}>
          <button className={styles.clap}>
            <ThumbsUp size={22} />
            Aplaudir <span>03</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
