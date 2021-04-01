import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/itemModal';
import HeroSection from './components/HeroSection';
import { Container } from 'reactstrap';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Provider } from 'react-redux' ;
import store from './store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Switch>
        <Route path='/' >
          <AppNavbar />
          <HeroSection/>
        </Route>
      </Switch>
    
      <Switch>
        <Route path='/shop' exact component={ShoppingList} >
          <Provider store={store}>
            <div className="App">
              <AppNavbar/>
              <Container>
                <ItemModal />
                <ShoppingList/>
              </Container>
            </div>
          </Provider>
        </Route>
      </Switch>
    </Router>
        
     
   
  </>
  );
}

export default App;
