import { Container, Row, Col, Button } from "reactstrap";
import ItemDetail from "../features/items/ItemDetail";
import ItemsList from "../features/items/ItemsList";
import { selectRandomItem } from "../features/items/itemsSlice";
// import ItemDetail from "../features/items/ItemDetail";

const ItemsMenuPage = () => {
  let selectedItem = selectRandomItem();
  const toggleItem = () => {
    selectedItem = selectRandomItem();
    console.log(selectedItem);
  };
  return (
    <Container>
      <Button onClick={() => toggleItem()}>Select Random Item</Button>
      <Row>
        <Col sm="5" md="7">
          <ItemsList />
        </Col>
        <Col sm="7" md="5">
          <ItemDetail item={selectedItem} />
        </Col>
      </Row>
    </Container>
  );
};

export default ItemsMenuPage;
