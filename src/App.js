import React from 'react';
import { Link, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './Home';
// import Topics from './Topics';
// import About from './About';
import './App.css';

const AboutLazy = React.lazy(() => import('./About'));
const TopicsLazy = React.lazy(() => import('./Topics'));

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <ol>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ol>
          <React.Suspense fallback={<div>loading....</div>}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={AboutLazy} />
            <Route path="/topics" component={TopicsLazy} />
          </React.Suspense>
        </header>
      </div>
    </Router>
  );
}

export default App;
