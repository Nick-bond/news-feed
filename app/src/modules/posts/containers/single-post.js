import React from 'react';

function SinglePost({title, text, onRemove}) {

  return (
    <div className="single-post">
      <h1 className="title">{title}</h1>
      <div className="description">
        {text}
      </div>
      <div className="btn btn-danger" onClick={onRemove}>Remove post</div>
    </div>
  );
}

export default SinglePost;