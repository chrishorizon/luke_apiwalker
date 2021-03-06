import './App.css';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import People from './views/People'
import Form from './components/Form'
import Error from './views/Error'
import Planet from './views/Planet'

function App() {
  return (
    <BrowserRouter>
      <Form />
      <Link to="/" className="ms-3">Home</Link>
        <Switch>
          <Route exact path="/people/:id">
            <People />
          </Route>
          <Route exact path="/planets/:id" >
            <Planet />
          </Route>
          <Route exact path="/error">
            <Error />
          </Route>

        </Switch>
    </BrowserRouter>
  );
}

export default App;
