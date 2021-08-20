import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Main from "./components/Main"
import './scss/App.scss';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
      </Switch>
    </Router>
    
  );
}

export default App;
