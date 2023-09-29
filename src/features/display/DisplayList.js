import { Col, Row } from "reactstrap";
import DisplayCard from "./DisplayCard";
import { selectFeaturedPromotion } from "../promotions/promotionsSlice";
// import { selectFeaturedItem } from "../promotions/promotionsSlice";

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
