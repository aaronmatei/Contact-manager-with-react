import React, { Component } from 'react';
class NotFound extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1 className='display-4'>
          {' '}
          <span className='text-danger'>404</span> Page Not Found!
        </h1>
        <p className='lead'>Sorry, this page does not exist</p>
      </div>
    );
  }
}

export default NotFound;
