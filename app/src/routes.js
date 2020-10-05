import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './modules/main/container/main';
import SinglePost from './modules/posts/containers/single-post';
import AddNewPost from './modules/posts/containers/add-new-post';

export const useRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/post/:id" component={SinglePost} />
        <Route path="/add-new-post/" component={AddNewPost} />
      </Switch>
    </React.Fragment>
  );
};
