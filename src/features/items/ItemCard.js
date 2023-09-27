import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

const ItemCard = (props) => {
  return (
    <Card className="card-item">
      <CardImg width="100%" src={props.item.image} alt={props.item.name} />
      <CardImgOverlay>
        <CardTitle>{props.item.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};

export default ItemCard;
