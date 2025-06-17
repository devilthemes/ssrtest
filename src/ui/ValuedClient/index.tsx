import { Container, Row, Col } from "react-bootstrap";

export default function ValuedClient() {
  return (
    <div className="valuedClient section">
      <Container>
        <Row>
          <Col>
            <h2 className="sectionHeader">Our Valued Client</h2>
            <div className="clients">
              <div className="item">
                <img src="/assets/images/company1.png" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/company-logo.png" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/company2.png" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/company3.png" alt="" />
              </div>
              <div className="item">
                <img src="/assets/images/company4.png" alt="" />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
