import React, {useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import actions from '../actions';

function AddNewPost() {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onSetTitle = useCallback((event) => {
    setTitle(event.currentTarget.value);
  });

  const onSetText = useCallback((event) => {
    setText(event.currentTarget.value);

  });

  const onSubmit = useCallback((event) => {
    event.preventDefault();
    dispatch(actions.addPost({
      title,
      text
    }));

    setText('');
    setTitle('');
  });

  return (
    <div className="add-new-post">
      <h2>Add new post</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={onSetTitle} />
        </div>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <textarea className="form-control" id="text" rows="3" value={text} onChange={onSetText}></textarea>
        </div>
        <button type="submit" className="btn btn-primary" onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default AddNewPost;