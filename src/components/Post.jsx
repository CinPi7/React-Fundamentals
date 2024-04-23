import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import PropTypes from "prop-types";
import { useState } from "react";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "./Post.module.css";
export function Post({ author, publishedAt, content }) {
  const publishedDateFormatted = format(
    publishedAt,
    "dd 'de' LLLL 'de' yyyy 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateSince = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  const [comments, setComments] = useState(["Post muito bacana!"]); // desestruturação do useState
  const handleCreateComment = () => {
    event.preventDefault();

    const newComment = event.target.comment.value;

    setComments([...comments, newComment]);
  };

  return (
    <div>
      <article className={styles.post}>
        <header className={styles.header}>
          <div className={styles.author}>
            <Avatar src={author.avatarURL} />

            <div className={styles.authorInfo}>
              <strong>{author.name}</strong>
              <span>{author.role}</span>
            </div>
          </div>
          <time
            title={publishedDateFormatted}
            dateTime={publishedAt.toISOString()}
          >
            {publishedDateSince}
          </time>
        </header>

        <div className={styles.content}>
          {content.map((line) => {
            if (line.type === "first-title") {
              return <h1>{line.content}</h1>;
            }

            if (line.type === "second-title") {
              return <h2>{line.content}</h2>;
            }

            if (line.type === "paragraph") {
              return <p>{line.content}</p>;
            }

            if (line.type === "link") {
              return <a href="">{line.content}</a>;
            }

            if (line.type === "hashtags") {
              return <p>{line.content}</p>;
            }
          })}
        </div>

        <form onSubmit={handleCreateComment} className={styles.commentForm}>
          <strong>
            Introduce yourself and leave your request and contact information in
            the form below:
          </strong>
          <textarea placeholder="Leave a comment" />

          <div className={styles.sendButton}>
            <button name="comment" type="submit">
              Send
            </button>
          </div>
        </form>

        <div className="commentList">
          {comments.map((comment) => {
            return <Comment content={comment} />;
          })}
        </div>
      </article>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.object.isRequired,
  publishedAt: PropTypes.func,
  content: PropTypes.array,
};
