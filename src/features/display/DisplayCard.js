import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const DisplayCard = ({ item }) => {
  const { image, name, description } = item;

  return (
    <Card className="home-page-card">
      <CardImg src={image} alt={name} />
      <CardBody>
        {/* <CardTitle>{name}</CardTitle> */}
        <CardText className="home-page-card-text">{description}</CardText>
      </CardBody>
    </Card>
  );
};

export default DisplayCard;
