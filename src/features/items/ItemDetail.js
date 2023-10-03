import { Card, CardImg, CardText, CardBody, Col, CardTitle } from "reactstrap";
import Button from "reactstrap";

const ItemDetail = ({ item }) => {
  const { image, name, description } = item;
  return (
    <Col ms="12" className="m-4">
      <Card className="item-detail-card">
        <CardImg top src={image} alt={name} />
        {/* <CardTitle className="text-center mt-3">
          <h3>{name}</h3>
        </CardTitle> */}
        <CardBody>
          <CardText className="text-center item-detail-title">
            {description}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ItemDetail;
