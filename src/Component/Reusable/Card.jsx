import Card from 'react-bootstrap/Card';
import '../../Styles/HomeStyle/Education/Carousel/Card.css'
function CardComp({ diplome, description, univ, date }) {
  return (
    <Card className="custom-card">
      <Card.Body>
        <Card.Title className="card-title">{diplome}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted card-subtitle">{date}</Card.Subtitle>
        <Card.Text className="card-text">{description}</Card.Text>
      </Card.Body>
      <Card.Img variant="bottom" src={univ} alt="université" className="card-image" />
    </Card>
  );
}

export default CardComp;
