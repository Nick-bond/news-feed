import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './modules/main';
import SinglePost from './modules/post/single-post';

export const useRoutes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/post/:id" component={SinglePost} />
      </Switch>
    </React.Fragment>
  );
};
