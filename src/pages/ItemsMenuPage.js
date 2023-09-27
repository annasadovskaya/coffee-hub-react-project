import { Container, Row, Col } from "reactstrap";
import ItemDetail from "../features/items/ItemDetail";
import ItemsList from "../features/items/ItemsList";
// import { selectRandomItem } from "../features/items/itemsSlice";
import { useState } from "react";
import { selectItemById } from "../features/items/itemsSlice";
// import ItemDetail from "../features/items/ItemDetail";

const ItemsMenuPage = () => {
  // let selectedItem = selectRandomItem();
  // const toggleItem = () => {
  //   selectedItem = selectRandomItem();
  //   console.log(selectedItem);
  // };

  // const [selectedItem, toggleItem] = useState(selectRandomItem());
  const [itemId, setItemId] = useState(0);
  const selectedItem = selectItemById(itemId);
  return (
    <Container>
      <Row>
        <Col sm="5" md="7">
          <ItemsList setItemId={setItemId} />
        </Col>
        <Col sm="7" md="5">
          <ItemDetail item={selectedItem} />
        </Col>
      </Row>
    </Container>
  );
};

export default ItemsMenuPage;
