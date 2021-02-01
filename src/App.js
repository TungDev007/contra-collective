import {Route, BrowserRouter as Router} from 'react-router-dom';
import HomePage from './pages/home';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path='/' component={HomePage}/>
      </div>
    </Router>    
  );
}

export default App;
