import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons';

const Header = props => {
  const { branding } = props;
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          {branding}
        </a>
        <div>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                <FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/contact/add' className='nav-link'>
                <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>Add Contact
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                <FontAwesomeIcon icon={faQuestion}></FontAwesomeIcon>About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  branding: 'Contact Manager'
};
Header.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
