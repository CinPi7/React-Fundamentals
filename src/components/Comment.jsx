import PropTypes from "prop-types";

import { Trash, ThumbsUp } from "@phosphor-icons/react";
import { Avatar } from "./Avatar";

import styles from "./Comment.module.css";
import profileImage from "./../assets/49377882.jpeg";

export function Comment({ content, onDeleteComment }) {
  function handleDeleteComment() {
    onDeleteComment(content);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={profileImage} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Cinthia Pissetti</strong>
              <time
                title="11 de Maio às 19h00min"
                dateTime="2022-05-11 09:12:10"
              >
                Cerca de 1h atrás
              </time>
            </div>

            <button title="Delete Comment" onClick={handleDeleteComment}>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp />
            Gostar <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}

Comment.propTypes = {
  content: PropTypes.string,
  onDeleteComment: PropTypes.func,
};
