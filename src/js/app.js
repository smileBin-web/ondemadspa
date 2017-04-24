'use strict'
import '../css/reset.css';
import '../css/app.less';

import  React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import App from './routeConstruct/App.js';

const routes = {
  path: '/',
  component: App,
  childRoutes:[require('./routeConstruct/Sex/sex.js'),require('./routeConstruct/edu/edu.js'),require('./routeConstruct/age/age.js')]
}

render(<Router routes={routes} history={hashHistory}/>, document.getElementById("outerContainer"));

