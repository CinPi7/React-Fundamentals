import PropTypes from "prop-types";

export function Post(props) {
  // props será objeto!
  console.log(props);

  return (
    <div>
      <strong>{props.author}</strong>
      <p>{props.content}</p>
    </div>
  );
}

Post.propTypes = {
  content: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
