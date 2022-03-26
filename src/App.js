

import './App.css';
import {Route} from 'react-router-dom';

import Home from './Pages/Home.jsx';
import NewSession from './Pages/NewSession.jsx';
import History from './Pages/History.js';
import NavBar from './Components/NavBar';
import Help from './Pages/Help.js';
import Authers from './Pages/Authers.js';
import About from './Pages/About.js';
import Contact from './Pages/Contact.js';
import Statistics from './Pages/Statistics.js';



function App() {
  return (
    <div className="App">
     <NavBar />
      {/* <switch> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/History" component={History} />
        <Route exact path="/New_Session" component={NewSession} />
        <Route exact path="/Help" component={Help} />
        <Route exact path="/Authers" component={Authers} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/Statistics" component={Statistics} />


        {/* place for future sites */}

      {/* </switch> */}
    </div>
  );
}

export default App;
