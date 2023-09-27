import { ITEMS } from "../../app/shared/ITEMS";
import { Col, Row } from "reactstrap";
import ItemCard from "./ItemCard";

const ItemsList = () => {
  return (
    <div className="items-container">
      <Row className="items-row">
        {ITEMS.map((item) => {
          return (
            <Col sm="4" key={item.id}>
              <ItemCard item={item} />
            </Col>
            //   <Col md="5" className="m-4" key={item.id}>
            //     <ItemCard item={item} />
            //   </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ItemsList;
