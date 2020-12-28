import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Provider } from "./Context";
import Home from './routes/Home';
import Profile from './routes/Profile';
import './Fluidum.css';

export default function Fluidum() {
  return (
    <Provider
			value={{ }}>
      <Router>
        <div className="body">
          {/* Top navigation bar */}
          <nav className="topNav">
            {/* Homepage link */}
            <div className="homeLink">
              <Link to="/">Home</Link>
            </div>
            {/* Profile link */}
            <div className="profileLink">
              <Link to="/Profile">Profile</Link>
            </div>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/Profile">
              <Profile 
              />
            </Route>
            <Route path="/">
              <Home 
              />
            </Route>
          </Switch>
        </div>
      </Router>
		</Provider>
  );
}

