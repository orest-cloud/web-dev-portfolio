//Styles
import './styles/global.scss';

//Modules import
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Pages import
import Home from './pages/home/home.jsx';

export default function App() {
  return (

    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
    </BrowserRouter >    

  );
}
