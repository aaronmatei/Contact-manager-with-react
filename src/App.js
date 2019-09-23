import React, { Component } from 'react';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import AddContact from './components/contacts/AddContact';
// get our fontawesome imports
import { Provider } from './context';

import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <div className='App'>
          <Header />
          <div className='container'>
            <AddContact />
            <Contacts />
          </div>
        </div>
      </Provider>
    );
  }
}

export default App;
