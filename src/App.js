import PageWrapper from './containers/pageWrapper';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

// Pages
import Home from './containers/Pages/Home';
import About from './containers/Pages/About';
import Contact from './containers/Pages/Contact';

function App() {
  return (
    <Router>
      <PageWrapper>
        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/'>
            <Home />
          </Route>

        </Switch>
      </PageWrapper>
    </Router>
  );
}

export default App;
