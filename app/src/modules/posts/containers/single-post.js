import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {useSelector, useDispatch} from "react-redux";
import getPosts from "../selectors/get-posts";
import dialogs from "../../dialogs";
import post from "../index";

function SinglePost() {
  const postId = useParams().id;
  const posts = useSelector(getPosts);
  const dispatch = useDispatch();
  const currentPost = posts.find((item) => item.id === postId);

  const { id, title, text } = currentPost || {};

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const deletePost = useCallback((id) => {
    dispatch(post.actions.removePost(id));
    dispatch(dialogs.actions.hide());
  }, [posts]);

  const onRemove = useCallback(() => {
    dispatch(dialogs.actions.show(dialogs.dialogTypes.DELETE_POST, {
      remove: () => {
        deletePost(id);
      }
    }));
  }, [dialogs]);

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