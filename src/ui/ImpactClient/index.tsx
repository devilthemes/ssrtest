import { Container, Row, Col } from "react-bootstrap";

export default function ImpactClient() {
  return (
    <div className="impactClient section">
      <Container>
        <Row>
          <div className="col-sm-12 col-lg-6 col-md-12 d-flex ">
            <div className="impactCont">
 <h2 className="sectionHeader">Impact We Made For Our Clients</h2>
            <p className="headerPara">
              As they say Numbers don't lie, Here are few numbers that describes
              Change IT.
            </p>
            </div>
           
          </div>
          <div className="col-sm-12 col-lg-6 col-md-12 d-flex ">
            <div className="impactCont">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="impact">
                  <div className="impactIcon">
                    <img
                      src="/assets/images/client-referral-rate.svg" width="48" height="48"
                      alt="Referral Rate"
                    />
                  </div>
                  <div className="impactIconRight">
                      <h3>85%</h3>
                  <span>Client Referral Rate</span>
                  </div>
                
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="impact">
                  <div className="impactIcon">
                    <img
                      src="/assets/images/estimation-vs-delivery.svg" width="48" height="48"
                      alt="Referral Rate"
                    />
                  </div>
                  <div className="impactIconRight">
                  <h3>80%</h3>
                  <span>Estimation vs Delivery</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="impact">
                  <div className="impactIcon">
                    <img
                      src="/assets/images/improved-efficiency.svg" width="48" height="48"
                      alt="Improved Efficiency"
                    />
                  </div>
                  <div className="impactIconRight">
                  <h3>40%</h3>
                  <span>Improved Efficiency</span>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="impact">
                  <div className="impactIcon">
                    <img
                      src="/assets/images/app-rating-soared.svg" width="48" height="48"
                      alt="app rating soared"
                    />
                  </div>{" "}
                  <div className="impactIconRight">
                  <h3>4.5/5</h3>
                  <span>App Rating Soared</span></div>
                  
                </div>
              </div>
            </div>
          </div>
          </div>
        </Row>
      </Container>
    </div>
  );
}
