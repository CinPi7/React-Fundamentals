import PropTypes from "prop-types";

import styles from "./Avatar.module.css";

export function Avatar({ hasBorder = true, src }) {
  // const hasBorder = props.hasBorder != false;
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt="avatar"
    />
  );
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  hasBorder: PropTypes.bool,
};
