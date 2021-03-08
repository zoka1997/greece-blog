import React from 'react';
import Card from 'react-bootstrap/Card';

function HomeSectionTwo() {
    return (
     <div className="container-fluid section-home-page">
     <h5 className="basic-text">Destinations</h5>
     <div className="card-section-image">
     <Card className="card-grp" style={{ width: '16rem' }}>
     <Card.Img variant="top" className="img1" src="imagesss/santorini.jpg" alt="Santorini" />
     <Card.Body>
     <Card.Title className="texttt">Santorini</Card.Title>
     </Card.Body>
     </Card>


     <Card className="card-grp" style={{ width: '16rem' }}>
     <Card.Img variant="top" className="img1" src="imagesss/solun-image2.jpg" alt="Zakintos" />
     <Card.Body>
     <Card.Title className="texttt">Solun</Card.Title>
     </Card.Body>
     </Card>


     <Card className="card-grp" style={{ width: '16rem' }}>
     <Card.Img variant="top" className="img1" src="imagesss/zakintos.jpg" alt="Zakintos" />
     <Card.Body>
     <Card.Title className="texttt">Zakintos</Card.Title>
     </Card.Body>
     </Card>
 </div>
</div>
    );
  }
  
  export default HomeSectionTwo;