//Styles
import './styles/global.scss';

//Modules import
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReactGA from 'react-ga';

// Pages import
import About from './pages/about/about.jsx';
import Home from './pages/home/home.jsx';
import CV from './pages/cv/cv.jsx';
import ScrollToTop from './components/scroll-to-top/scroll-to-top.jsx';
import StompingGround from './pages/stomping-ground/stomping-ground.jsx';

// Initialize Google Analytics
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);

export default function App() {
  return (

    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/cv" exact component={CV} />
        <Route path="/projects/stomping-ground" exact component={StompingGround} />
      </Switch>
    </BrowserRouter >

  );
}
