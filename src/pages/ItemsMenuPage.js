// import { Container, Row, Col } from "reactstrap";
// import ItemDetail from "../features/items/ItemDetail";
// import ItemsList from "../features/items/ItemsList";
// // import { selectRandomItem } from "../features/items/itemsSlice";
// import { useState } from "react";
// import { selectItemById } from "../features/items/itemsSlice";
// // import ItemDetail from "../features/items/ItemDetail";

// const ItemsMenuPage = () => {
//   const [itemId, setItemId] = useState(0);
//   const selectedItem = selectItemById(itemId);
//   return (
//     <Container>
//       <Row>
//         <Col sm="5" md="7">
//           <ItemsList setItemId={setItemId} />
//         </Col>
//         <Col sm="7" md="5">
//           <ItemDetail item={selectedItem} />
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default ItemsMenuPage;

import { Container } from "reactstrap";
import ItemsList from "../features/items/ItemsList";

const ItemsMenuPage = () => {
  return (
    <Container className="mb-5">
      <ItemsList />
    </Container>
  );
};

export default ItemsMenuPage;
