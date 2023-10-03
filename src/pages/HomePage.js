import { Container } from "reactstrap";
// import DisplayList from "../features/display/DisplayList";
import DisplayGridImages from "../features/display/DisplayGridImages";
import SubHeader from "../components/SubHeader";

const HomePage = () => {
  return (
    <Container fluid="md" className="mb-4">
      <SubHeader current="Home" />
      <DisplayGridImages />
    </Container>
  );
};

export default HomePage;
