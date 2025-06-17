import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
export default function NeedBoost() {
  return (
    <div className="boost section">
      <Container>
        <Row>
          <Col>
            <h2 className="sectionHeder">Need to boost your existing team?</h2>
            <p>
              Our hands-on training programs are designed to boost your
              technical expertise, Upskill your team and gain a competitive
              edge.
            </p>
            <div className="d-flex justify-content-center">
              <Link href="/training" className="bigBtn viewMore"> Explore Our Training</Link>
            
            </div>
           
          </Col>
        </Row>
      </Container>
    </div>
  );
}
