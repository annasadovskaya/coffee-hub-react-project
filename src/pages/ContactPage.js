import { Container, Col, Row } from "reactstrap";
import SubHeader from "../components/SubHeader";

const ContactPage = () => {
  return (
    <Container className="contact-container">
      <SubHeader current="Contact Us" />
      <Row className="row-content align-items-center">
        <Col sm="12">
          <h4 className="address-header">Address</h4>
          <address>
            1202 Caminito Del Mar
            <br />
            San Diego, CA, 92014
            <br />
            U.S.A
          </address>
          <div className="cell-email-info">
            <a role="button" className="btn btn-link" href="tel:+12065551234">
              <i className="fa fa-phone" /> 1-222-333-4444
            </a>
            <br />
            <a
              role="button"
              className="btn btn-link"
              href="mailto:fakeemail@fakeemail.co"
            >
              <i className="fa fa-envelope-o" /> info@coffeehub.com
            </a>
          </div>
        </Col>
      </Row>

      {/* <Row className="row-content mt-5">
        <Col xs="12">
          <h2 className="feedback-header">Send Us Your Feedback</h2>
          <hr />
        </Col>
        <Col md="10">TBD: ContactForm</Col>
      </Row> */}
    </Container>
  );
};

export default ContactPage;
