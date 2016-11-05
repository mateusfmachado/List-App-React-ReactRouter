import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, browserHistory} from 'react-router';
import Header from './template/header';
import ListProductAdd from './view/listProductAdd'

class Main extends Component {
    render() {
      return (
        <div className="app">
          {this.props.children}
        </div>
      );
    }
}

ReactDOM.render((
  <Main>
    <Header />
    <div className="container-fluid">
      <Router history={browserHistory}>
        <Route path="/" component={ListProductAdd}/>
      </Router>
    </div>
  </Main>
  ),
  document.getElementById('root')
);
