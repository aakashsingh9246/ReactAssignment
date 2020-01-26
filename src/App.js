import React, { Fragment } from 'react';
import Homepage from './components/Homepage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CompareProducts from './components/CompareProducts';
import ProductDetails from './components/ProductDetails';
import './App.css';
//redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section className='container'>
            <Route exact path='/' component={Homepage} />
            <Switch>
              <Route
                exact
                path='/productDetails/:id'
                component={ProductDetails}
              />
              <Route exact path='/compareProduct' component={CompareProducts} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
