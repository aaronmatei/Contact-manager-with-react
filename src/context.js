import React, { Component } from 'react';

const Context = React.createContext();
const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter(
          contact => contact.id !== action.payload
        )
      };
    default:
      return state;
  }
};
export class Provider extends Component {
  state = {
    contacts: [
      {
        id: 1,
        name: 'John1 Doe',
        email: 'joh1ndoe@gmail.com',
        phone: '5551-555-555'
      },
      {
        id: 2,
        name: 'John2 Doe',
        email: 'john2doe@gmail.com',
        phone: '5552-555-555'
      },
      {
        id: 3,
        name: 'John3 Doe',
        email: 'john3doe@gmail.com',
        phone: '5553-555-555'
      }
    ],
    dispatch: action => {
      this.setState(state => reducer(state, action));
    }
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}
export const Consumer = Context.Consumer;
