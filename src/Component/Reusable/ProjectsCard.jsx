import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../Styles/HomeStyle/Education/Carousel/Card.css'
const ProjectsCard = ({titre,description,image}) => {
    return (
        <Card className="custom-card m-2">
            <Card.Img variant="bottom" src={image} alt="université" className="card-image h-75" />
        <Card.Body>
          <Card.Title className="card-title">{titre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted card-subtitle"></Card.Subtitle>
          <Card.Text className="card-text">{description}</Card.Text>
        </Card.Body>
      </Card>
    );
}

export default ProjectsCard;
