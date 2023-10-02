import { Container } from "reactstrap";
import DisplayList from "../features/display/DisplayList";
import DisplayGridImages from "../features/display/DisplayGridImages";

//With card

// const HomePage = () => {
//   return (
//     <Container>
//       <DisplayList />
//     </Container>
//   );
// };

//With Grid
const HomePage = () => {
  return (
    <Container fluid="md">
      <DisplayGridImages />
    </Container>
  );
};

export default HomePage;
