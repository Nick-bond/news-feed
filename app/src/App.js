import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {useRoutes} from './routes';
import Header from './modules/header';
import Footer from './modules/footer';
import './App.css';

function App() {
  const routes = useRoutes(false);
  return (
    <Router>
      <div className="main-wrapper">
        <Header/>
        <div className="app">{routes}</div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
