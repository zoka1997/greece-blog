import React, { Component } from 'react'
import { tourData } from '../Components/tourData';
import Tour from '../Pages/Tour';

export default class Places extends Component {
    state = {
        tours:  tourData
    };
  render() {
      const { tours } = this.state;
      console.log(this.state.tours);
  
    return (
      <div className="container-fluid tourlist-section">
       <h5 className="basic-text1">Places</h5>
      <div className="main-text-card">
             {tours.map(tour => {
             return <Tour key={tour.id} tour={tour} />;
             })}
      </div>
      </div>
    );
  }
}
