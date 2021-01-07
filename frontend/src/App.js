import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'
import Content from './Content/Content'

const App = () => {
  return (
    <Router>
      <Navigation />
      <Content />
    </Router>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
