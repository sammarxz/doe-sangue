import React from 'react';
import { 
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// Pages
import Home from './pages/Home';
import Submission from './pages/Submission';

// Components
import Header from './components/Header';
import Container from './components/Container';

const App = () => (
  <Router>
    <Header />
    <Container>
      <Route render={({location}) => (
        <Switch location={location} key={location.pathname}>
          <Route
            exact
            path='/'
            render={() => <Home />}
          />
          <Route
            exact
            path='/cadastro'
            render={() => <Submission />}
          />
        </Switch>
      )} />
    </Container>
  </Router>
)

export default App;
