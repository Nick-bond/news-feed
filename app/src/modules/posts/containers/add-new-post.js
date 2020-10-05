import React from 'react';

function AddNewPost() {
  return (
    <div className="add-new-post">
      <h2>Add new post</h2>
      <form>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" />
        </div>
        <div className="form-group">
          <label htmlFor="text">Text</label>
          <textarea className="form-control" id="text" rows="3"></textarea>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

export default AddNewPost;