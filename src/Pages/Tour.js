import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaRegCaretSquareDown } from "react-icons/fa";
import './Tour.css';

export default class Tour extends Component {
    state = {
        showInfo: false
    };
    handleInfo = () => {
        this.setState({
            showInfo:!this.state.showInfo
        });
    };

  render() {
      const {img, btn, title, text} = this.props.tour;
    return (
       <div className="card-tour">
        <Card className="card-tour-second" style={{ width: '16rem' }}>
             <Card.Img className="tour-img" variant="top" src={img} />
        <Card.Body>
             <Button onClick={this.handleInfo} className="tour-btn" variant="primary">{btn} <FaRegCaretSquareDown /></Button>
             <Card.Title className="tour-title" >{title}</Card.Title>
        <Card.Text>
         {''}
        </Card.Text>
        </Card.Body>
        {this.state.showInfo && <p className="tour-txt">{text}</p> }
        </Card>
        </div>
    )
  }
}
