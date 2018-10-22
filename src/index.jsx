import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import registerServiceWorker from './registerServiceWorker';
import App from './app/App.jsx';
import NotFound from './app/components/notFound/NotFound.jsx';
import Dashboard from './app/components/dashboard/Dashboard.jsx';
import Profile from './app/components/profile/Profile.jsx';
import Update from './app/components/update/Update.jsx';

render(
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/profile" component={Profile}></Route>
      <Route path="/update" component={Update}></Route>
      <Route path="*" component={NotFound}></Route>
    </Route>
  </Router>,
  document.getElementById("app")
);
registerServiceWorker();
