import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ThumbPost({ post, removePost}) {
  const {title, text, id} = post;
  return (
    <Link to={`/post/${id}`} className="thumb">
      <div className="description">
        <div className="description-title">{title}</div>
        <div className="description-text">{text}</div>
      </div>
      <div className="btn btn-danger" onClick={(e) => {
        e.preventDefault();
        removePost(id)
      }}>Remove Post</div>
    </Link>
  );
}

ThumbPost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    id: PropTypes.string,
  }).isRequired
};

export default ThumbPost;