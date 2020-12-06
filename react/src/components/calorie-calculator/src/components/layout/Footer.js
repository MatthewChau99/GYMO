import React, { Component } from 'react';

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div className='container'>{new Date().getFullYear()} | Nutrilist</div>
      </footer>
    );
  }
}

export default Footer;
