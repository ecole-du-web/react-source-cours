import "./App.css";
import Home from "./Containers/Home/Home";
import AddArticle from "./Containers/AddArticle/AddArticle";
import Contact from "./Containers/Contact/Contact";
import Article from "./Containers/Article/Article";
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
      <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/ecrire" exact component={AddArticle} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/article" exact component={Article} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
