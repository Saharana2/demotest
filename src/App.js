import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Navbar from "./components/home/navbar";
import Home from 'pages/home';
import About from 'pages/about';
import Contact from 'pages/contact';
import Gallery from 'pages/gallery';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/gallery' component={Gallery} />
      </Switch>
    </Router>
);
}

export default App;
