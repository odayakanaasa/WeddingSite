import React from 'react';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-91648771-3');
ReactGA.pageview(window.location.pathname + window.location.search);

const NotFoundPage = () => (
  <div>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </div>
)

export default NotFoundPage
