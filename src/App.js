import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from "./components/index";
import Works from "./components/WorkExperience";
import Projects from './components/Projects';
import Contacts from "./components/Contacts";
import AboutMe from './components/aboutMe';

function App() {
  return (
    <>
      <CssBaseline />
        <Switch>
          <Route path="/working-experience" component={Works}/>
          <Route path="/projects" component={Projects}/>
          <Route path="/contacts" component={Contacts}/>
          <Route path="/aboutMe" component={AboutMe}/>
          <Route  path="/" component={Home}/>
        </Switch>
        
    </>
  );
}

export default App;
