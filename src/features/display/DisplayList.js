import { Col, Row, Container } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";

const DisplayList = () => {
  const items = [selectFeaturedPromotion()];

  return (
    <Row>
      {items.map((item, idx) => {
        return (
          <Col md className="m-1" key={idx}>
            <DisplayCard item={item} />
          </Col>
        );
      })}
    </Row>
  );
};

export default DisplayList;
