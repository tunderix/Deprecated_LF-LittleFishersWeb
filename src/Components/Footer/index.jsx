import React, { Component } from 'react';

import './style.css';

export default class Footer extends Component {
  render() {
    return (
      <footer id="footer">
        <div className="copyright">
          &copy; Sami Repo.
        </div>
      </footer>
    );
  }
}