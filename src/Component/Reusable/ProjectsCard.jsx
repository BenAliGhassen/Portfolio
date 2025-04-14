import React from 'react';
import Card from 'react-bootstrap/Card';
import '../../Styles/HomeStyle/Education/Carousel/Card.css'
const ProjectsCard = () => {
    return (
        <Card className="custom-card m-2">
            <Card.Img variant="bottom" src="" alt="université" className="card-image" />
        <Card.Body>
          <Card.Title className="card-title"></Card.Title>
          <Card.Subtitle className="mb-2 text-muted card-subtitle"></Card.Subtitle>
          <Card.Text className="card-text"></Card.Text>
        </Card.Body>
      </Card>
    );
}

export default ProjectsCard;
