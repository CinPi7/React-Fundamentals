import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import PropTypes from "prop-types";
import { useState } from "react";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "./Post.module.css";
export function Post({ author, content, publishedAt }) {
  const [comments, setComments] = useState(["Oii, deixe seu comentário!"]);
  const [newCommentText, setNewCommentText] = useState("");

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

  function handleCreateNewComment() {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange() {
    setNewCommentText(event.target.value);
  }

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
          {content.map((line, index) => {
            const key = `${line.type}-${index}`;

            if (line.type === "first-title") {
              return <h1 key={key}>{line.content}</h1>;
            }
            if (line.type === "second-title") {
              return <h2 key={key}>{line.content}</h2>;
            }
            if (line.type === "paragraph") {
              return <p key={key}>{line.content}</p>;
            }
            if (line.type === "link") {
              return (
                <a key={key} href="/">
                  {line.content}
                </a>
              );
            }
            if (line.type === "hashtags") {
              return <p key={key}>{line.content}</p>;
            }
            return null;
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <textarea
            placeholder="Leave a comment"
            name="comment"
            value={newCommentText}
            onChange={handleNewCommentChange}
          />
          <div className={styles.sendButton}>
            <button type="submit">Send</button>
          </div>
        </form>

        <div className="commentList">
          {comments.map((comment) => {
            return <Comment key={content} content={comment} />;
          })}
        </div>
      </article>
    </div>
  );
}

Post.propTypes = {
  author: PropTypes.shape({
    avatarURL: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
  }),
  content: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string,
      content: PropTypes.string,
    })
  ),
  publishedAt: PropTypes.instanceOf(Date),
};
