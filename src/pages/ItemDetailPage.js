import { Container, Row } from "reactstrap";
import { useParams } from "react-router-dom";
import { selectItemById } from "../features/items/itemsSlice";
import ItemDetail from "../features/items/ItemDetail";

const ItemDetailPage = () => {
  const { itemId } = useParams();
  const item = selectItemById(itemId);

  return (
    <Container>
      <Row>
        <ItemDetail item={item} />
      </Row>
    </Container>
  );
};

export default ItemDetailPage;
