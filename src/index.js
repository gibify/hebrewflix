import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './index.css';
import Home from './pages/Home';
import Videos from './pages/Videos';
import Categories from './pages/Categories';
import PageError from './pages/PageError';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/videos" component={Videos} />
      <Route path="/categories" component={Categories} />
      <Route component={PageError} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);
