import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <ul className='container'>
          <Link id='logo' to='/'>
            <i className='lab la-envira'></i>Nutrilist
          </Link>
          <Link to='/about'>
            <i id='question' className='las la-question-circle'></i>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
