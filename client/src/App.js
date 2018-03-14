import React from 'react';
import { Switch, Route } from 'react-router-dom'
import View from './components/View';
import Post from './components/Post';
import Four from './components/Four';

  const App = () => (
      <Switch>
        <Route exact path="/" component={View} />
        <Route exact path="/posts/:id" component={Post} />
        <Route component={Four} />
      </Switch>
    )

export default App;
