import { Container,Row,Col } from "react-bootstrap";


export default function WorldStreet (){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    return (
        <div className="worldStreet section">
            <Container>
                <Row>
                    <Col>
                        <h2 className="sectionHeader">Word's on the Street</h2>
                        <p className="headerInfo">
                            What other business leaders are saying
                        </p>

                    </Col>
                </Row>
                <Row>
                    <Col>
                   
                    <div className="company">
 <img src="/assets/images/company1.png" />
                        <p>Big shoutout to <span>@changeIT!</span> This team excels at handling not just issues, but our internal requirements too. I've never seen problems resolved so quickly. </p>
                        <div className="avatar"><img src="/assets/images/Avatar.png" /></div>
                        <div className="name"><strong>John Doe</strong></div>
                        <div className="designation">Marketing Manager, Sisyphus</div>
                    </div>
                      
                  
                   
                    </Col>
                </Row>
            </Container>
        </div>
    )
}