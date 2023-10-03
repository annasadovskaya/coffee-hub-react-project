import { Col, Row, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";

const SubHeader = ({ current, menu }) => {
  return (
    <Row>
      <Col>
        <Breadcrumb className="mt-4 breadcrumbs">
          <BreadcrumbItem>
            <Link to="/" className="home-link">
              Home
            </Link>
          </BreadcrumbItem>
          {menu && (
            <BreadcrumbItem>
              <Link to="/menu" className="menu-link">
                Menu
              </Link>
            </BreadcrumbItem>
          )}
          <BreadcrumbItem>{current}</BreadcrumbItem>
        </Breadcrumb>
        <h1 className="text-center mb-3 header">{current}</h1>
      </Col>
    </Row>
  );
};

export default SubHeader;
