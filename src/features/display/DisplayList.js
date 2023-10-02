import { Col, Row, Container } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
// import { selectFeaturedItem } from "../promotions/promotionsSlice";
// import { selectFeaturedItem } from "../items/itemsSlice";

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

// Option with 2 cards on the homepage

// const DisplayList = () => {
//   const items = [selectFeaturedPromotion(), selectFeaturedItem()];
//   return (
//     <Row>
//       {items.map((item, idx) => {
//         return (
//           <Col md className="m-1" key={idx}>
//             <DisplayCard item={item} />
//           </Col>
//         );
//       })}
//     </Row>
//   );
// };

export default DisplayList;
