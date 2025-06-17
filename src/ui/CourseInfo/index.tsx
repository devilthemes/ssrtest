import { Container, Row, Col } from "react-bootstrap";
interface CourseInfoInterface {
    title:string;
    desc:string;
    price:number;
    hours:number;
    modules:number;
}
export default function CourseInfo({title="",desc="",price=0,hours=0,modules=0}:CourseInfoInterface) {
  return (
    <div className="courseInfo">
     
      <Container>
        <Row>
          <Col lg={6} md={6} sm={12}>
            <h2>{title}</h2>
            <div className="price">£{price}</div>
            <div className="estimate">
              <div>
                {" "}
                <img src="/assets/images/clock.svg" /> {hours} Hours
              </div>
              <div>
                {" "}
                <img src="/assets/images/play.svg" /> {modules} Modules
              </div>
            </div>
            <p>
            {desc}
            </p>
          </Col>
        </Row>
      </Container>{" "}
    </div>
  );
}
