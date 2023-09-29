import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import DisplayCarousel from "../features/display/DisplayCarousel";

const HomePage = () => {
  return (
    <Container>
      <DisplayList />
    </Container>
  );
};

//Carousel - not working

// const HomePage = () => {
//   return (
//     <Container>
//       <DisplayCarousel />
//     </Container>
//   );
// };

export default HomePage;
