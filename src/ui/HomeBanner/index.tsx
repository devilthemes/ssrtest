'use client'
import { Col, Container,Row } from "react-bootstrap"
import EnquiryNow from "../EnquiryNow";
import { useState } from "react";

export default function HomeBanner (){
    const [enquiryNowStatus,setEnquiryNowStatus] = useState(false);
    return(
        <>
        {
      enquiryNowStatus &&   <EnquiryNow onClose={()=>setEnquiryNowStatus(false)} />
    }
        
            <div className="homeBanner">
            <img src="/assets/images/banner-section.jpg" className="img-fluid bannerImg" alt="HomeBanner" />
            <div className="bannerContent">
                  <Container>
                <Row>
                    <Col className="textContent">
                        <h1>Empowering Your Future with Cutting Edge IT Solutions</h1>
                        <p>From <strong>IT Operations to Training Services</strong>, we deliver <strong>end-to-end IT expertise</strong> tailored to your needs.
</p>
<button onClick={()=>setEnquiryNowStatus(true)} className="bigBtn"><span className="txt">Enquire Now</span> <span className="icon"><img src="/assets/images/white-arrow-right.svg" /></span> </button>
                    </Col>
                </Row>
            </Container>
            </div>
          
        </div>
        </>
        
    )
}