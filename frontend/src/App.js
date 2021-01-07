import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

import Navigation from './components/Navigation/Navigation'

const App = () => {
  return (
    <Router>
      <Navigation />
    </Router>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById('root'));
