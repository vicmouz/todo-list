import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Route from './Route';

import Home from '../pages/Home'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
    </Switch>
  );
}