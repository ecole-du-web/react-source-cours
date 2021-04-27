import logo from './logo.svg';
import './App.css';
import Accueil from './Components/Accueil'
import Projets from './Components/Projets'
import Contact from './Components/Contact'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route path="/" exact component={Accueil}/>
        <Route path="/Projets" exact component={Projets}/>
        <Route path="/Contact" exact component={Contact}/>
      </Switch>

      </Router>
    </>
  );
}

export default App;
