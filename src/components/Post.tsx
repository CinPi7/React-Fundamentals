import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import PropTypes from "prop-types";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

import styles from "./Post.module.css";

interface Author {
  avatarURL: string;
  name: string;
  role: string;
}

interface Content {
  type: "first-title" | "second-title" | "paragraph";
  content: string;
}

interface PostProps {
  author: Author;
  content: Content;
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
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

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    console.log(event, "event");

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }

  function handleEmptyFieldsMessage(event: InvalidEvent<HTMLTextAreaElement>) {
    if (!newCommentText.trim()) {
      event.target.setCustomValidity(
        "Por favor, insira sua mensagem. Please, enter your comment."
      );
    }
  }

  function deleteComment(commentIndexToDelete: string) {
    const listWithoutSelectedComment = comments.filter((comment) => {
      return comment !== commentIndexToDelete;
    });

    setComments(listWithoutSelectedComment);
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
            onInvalid={handleEmptyFieldsMessage}
            required
          />
          <div className={styles.sendButton}>
            <button type="submit">Send</button>
          </div>
        </form>

        <div className="commentList">
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
