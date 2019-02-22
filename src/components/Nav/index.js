
import React, { Component } from 'react';
import "./style.css";


class Nav extends Component {
    render() {
        return(
          <div className="container-fluid">
          <div className="row nav text-center">
              <div className="col-lg-4 mt-1"><h2>Clicky!</h2></div>
              <div className="col-lg-4 mt-1"><h5>Click on a Character, but dont click it twice!</h5></div>
              <div className="col-lg-4 mt-2"><h4>Score: {this.props.total} | Top Score: {this.props.topScore}</h4></div>
          </div>
      </div>
        )
    }
}

export default Nav;