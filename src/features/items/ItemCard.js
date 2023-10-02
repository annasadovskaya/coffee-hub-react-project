import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";

// const ItemCard = ({ item }) => {
//   const { image, name } = item;
//   return (
//     <Card className="card-item">
//       <CardImg width="100%" src={image} alt={name} />
//       <CardImgOverlay>
//         <CardTitle>{name}</CardTitle>
//       </CardImgOverlay>
//     </Card>
//   );
// };

const ItemCard = ({ item }) => {
  const { id, image, name } = item;
  return (
    <Link to={`${id}`}>
      <Card className="card-item">
        <CardImg width="100%" src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle className="text-center">{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};

export default ItemCard;
