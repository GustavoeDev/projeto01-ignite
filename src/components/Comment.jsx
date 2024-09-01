import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeCount() {
    setLikeCount(likeCount + 1);
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
          <button onClick={handleLikeCount} className={styles.clap}>
            <ThumbsUp size={22} />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
