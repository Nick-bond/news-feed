import React, { useEffect } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {useRoutes} from './routes';
import posts from './modules/posts';

import Header from './modules/header';
import Footer from './modules/footer';
import DialogsContainer from './modules/dialogs/containers/dialogs-container';

import './App.css';

function App() {
  const routes = useRoutes(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(posts.actions.fetchPosts());
  }, []);

  return (
    <Router>
      <div className="main-wrapper">
        <Header/>
        <div className="app">{routes}</div>
        <Footer/>
        <DialogsContainer />
      </div>
    </Router>
  );
}

export default App;
