import { Container, Row, Col } from "react-bootstrap";

export default function WhyToChoose() {
  return (
    <div className="ourServices section">
      <Container>
        <Row>
          <Col sm={12}>
            <h2 className="sectionHeader">Why  to choose us for 
            Software Development</h2>

          </Col>
        </Row>
        <Row className="contentList">
            <Col sm={12} md={6} lg={6} >
            <div className="item"><h4>Innovation That Drives Results</h4>
            <p>We explore the latest technologies and innovative approaches to give your software a competitive edge and solve your unique challenges.</p>
            </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className="item"><h4>Collaborative Partnership</h4>
            <p>We work closely with you, listening to your needs and keeping you informed every step of the way. Your success is our success.</p>
            </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className="item"><h4>Quality You Can Trust, From Code to Completion</h4>
            <p>Rigorous testing and meticulous code reviews ensure a robust, reliable, and flawlessly performing product. We stand behind our work.</p>
            </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className="item"><h4>Transparent Communication</h4>
            <p>Regular updates and open communication keep you informed and confident throughout the project. No surprises.</p>
            </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className="item border-0"><h4>Scalable Solutions</h4>
            <p>We design software to adapt and evolve with your changing needs, whether you're just starting out or experiencing rapid growth.</p>
            </div>
            </Col>
            <Col sm={12} md={6} lg={6}>
            <div className="item border-0"><h4>Dedicated Support</h4>
            <p>We provide comprehensive support and maintenance to ensure your software performs optimally. We're your partners for the long haul.</p>
            </div>
            </Col>
        </Row>

        
      </Container>
    </div>
  );
}
