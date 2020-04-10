import React from 'react';
import './assets/css/App.css';
import Router from './Router';
import { Provider } from 'react-redux'
import { createStore, compose } from 'redux'
import reducer from './reducers'
import Test from './components/Test';



const initialState = {
  "user": 'Maicol Duque',
  "edad": 24,
  "lenguajes": [
    { "nombre": "JavaScript" },
    { "nombre": "PHP" },
    { "nombre": "Java" },
    { "nombre": "Scala" },
    { "nombre": "Python" }
  ]
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

function App() {
  
  return (
    <div className="App">
        <Provider store={store}>
          {/* <Test /> */}
          <Router />        
        </Provider>
    </div>
  );
}

export default App;


