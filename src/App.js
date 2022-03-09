

import './App.css';
import NewSession from './Pages/NewSession.js';
import Home from './Pages/Home.js';
import History from './Pages/History.js';
import {Route} from 'react-router-dom';
import NavBar from './Components/NavBar';

function App() {
  return (
    <div className="App">
     <NavBar />
      {/* <switch> */}
        <Route exact path="/" component={Home} />
        <Route path="/History" component={History} />
        <Route path="/New_Session" component={NewSession} />
        {/* place for future sites */}

      {/* </switch> */}
    </div>
  );
}

export default App;
