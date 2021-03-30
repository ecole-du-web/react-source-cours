import logo from './logo.svg';
import './App.css';
import Accueil from './Components/Accueil'
import Projets from './Components/Projets'
import Contact from './Components/Contact'
import Nav from './Components/Nav/Nav'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App() {
  return (
    <>
      <Router>
        
      <Nav />

      <Switch>
        <Route path="/" exact component={Accueil}/>
        <Route path="/Projets" exact component={Projets}/>
        <Route path="/Contact" exact component={Contact}/>
        <Route path="/" component={() => <div>ERREUR 404</div>}/>
      </Switch>

      </Router>
    </>
  );
}

export default App;
