import React, { Component } from 'react';
import "./style.css";


class Card extends Component {
    render() {
        return(
            <div className="card">
        <div className="col-lg-4">
        <div id={this.props.id}  onClick={() => this.props.handleChocie(this.props.id)}>
        <img className="card-img" src={this.props.image} />
        </div>
    </div>
    </div>
        )
    }
}



  export default Card;