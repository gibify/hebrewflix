import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import  CadastroVideos  from './pages/CadastroVideos';
import CadastroCategoria from './pages/CadastroCategoria';
import Home from './pages/Home';
import './index.css';


ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact/>
      <Route path="/cadastro-videos" component={CadastroVideos} />
      <Route path="/cadastro-categoria" component={CadastroCategoria} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

