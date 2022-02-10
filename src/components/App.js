import React from "react";
import { Route, Switch } from "react-router-dom";

import HomePage from './home/HomePage';
import Header from './header/Header';
import AboutPage from './about/AboutPage';
import PageNotFound from './PageNotFound';

const App = () => {
    return (
<div className='container-fluid'>
    <Header />
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route path='/about' component={AboutPage} />
      <Route component={PageNotFound} />
    </Switch>
  </div>
    );
}

export default App;
