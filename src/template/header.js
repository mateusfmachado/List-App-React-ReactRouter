import React, {Component} from 'react';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-collapse" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">List App</a>
          </div>
          <div className="collapse navbar-collapse" id="bs-collapse">
            <ul className="nav navbar-nav">
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
