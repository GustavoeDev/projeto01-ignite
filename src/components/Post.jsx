import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { useState } from "react";

import styles from "./Post.module.css";

export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState([]);
  const [textValue, setTextValue] = useState("");

  const dateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  });

  const dateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleSubmitForm() {
    event.preventDefault();
    setComments([...comments, textValue]);
    setTextValue("");
  }

  function handleChangeText() {
    setTextValue(event.target.value);
  }

  function deleteComment(commentDelete) {
    const commentWithoutDeleted = comments.filter((item) => {
      return item !== commentDelete;
    });

    setComments(commentWithoutDeleted);
  }

  return (
    <div className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl} />
          <div className={styles.info}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={dateFormatted} dateTime={publishedAt.toISOString()}>
          {dateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.content}>{item.content}</p>;
          } else if (item.type === "link") {
            return (
              <p key={item.content}>
                <a href="#">{item.content}</a>
              </p>
            );
          }
        })}
      </div>

      <form onSubmit={handleSubmitForm} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          value={textValue}
          onChange={handleChangeText}
          placeholder="Escreva um comentário..."
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </div>
  );
}
