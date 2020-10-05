import React, { useCallback } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import ThumbPost from '../../posts/components/thumb-post';
import getPosts from "../../posts/selectors/get-posts";
import post from "../../posts";
import dialogs from "../../dialogs";

function Main() {
  const posts = useSelector(getPosts);
  const dispatch = useDispatch();

  const deletePost = useCallback((id) => {
    dispatch(post.actions.removePost(id));
    dispatch(dialogs.actions.hide());
  }, [posts]);

  const showDialogRemovePost = useCallback((id) => {
    dispatch(dialogs.actions.show(dialogs.dialogTypes.DELETE_POST, {
      remove: () => {
        deletePost(id);
      }
    }));
  }, [dialogs]);

  return (
    <div className="main-content">
      <div className="thumb-wrapper">
        {
          posts.map((item) => (
            <ThumbPost
              post={item}
              removePost={showDialogRemovePost}
            />
          ))
        }
      </div>
    </div>
  );
}

export default Main;