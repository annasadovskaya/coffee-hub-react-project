import CoffeeAndOceanImg from "../../app/assets/img/coffee-ocean-big.jpg";
import CoffeeImg from "../../app/assets/img/coffee-shop.jpg";
import CoffeeItem from "../../app/assets/img/coffee4.jpg";
import { Row, Col, Card, CardImg, CardBody, CardText } from "reactstrap";

const DisplayGridImages = () => {
  return (
    <Row className="justify-content-md-center">
      <Col sm="6" className="mt-2">
        <Card>
          <CardImg src={CoffeeAndOceanImg} alt="Coffee and Ocean Image " />
          <CardBody className="home-page-card-body">
            {/* <CardTitle>{name}</CardTitle> */}
            <CardText className="home-page-card-text">
              Enjoy a freshly brewed coffee with an ocean view here in San
              Diego.
            </CardText>
          </CardBody>
        </Card>
      </Col>
      <Col sm="6" className="mt-2">
        <Col>
          <Card>
            <CardImg src={CoffeeImg} alt="Coffee Image " />
            <CardBody className="home-page-card-body">
              {/* <CardTitle>{name}</CardTitle> */}
              <CardText className="home-page-card-text">
                Enjoy our CoffeeHub cafe.
              </CardText>
            </CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="mt-2">
            <CardImg src={CoffeeItem} alt="Coffee Item Image" />
            <CardBody className="home-page-card-body">
              {/* <CardTitle>{name}</CardTitle> */}
              <CardText className="home-page-card-text">
                Enjoy coffee with friends.
              </CardText>
            </CardBody>
          </Card>
        </Col>
      </Col>
    </Row>
  );
};

export default DisplayGridImages;
