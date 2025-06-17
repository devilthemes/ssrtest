"use client";
import { Container, Row, Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import EnrollDone from "../EnrollDone";
import { useState } from "react";
import CancelAlertBox from "../CancelAlertBox";
interface EnrollmentInterface {
    onClose:()=>void;
}
interface StateDBInterface {
  email:string;
}
export default function Enrollment({onClose=()=>{}}:EnrollmentInterface) {
  const [showBox,setShowBox] = useState<boolean>(false);
  const [enrollDoneStatus,setEnrollDoneStatus] = useState<boolean>(false);
  const [loading,setLoading] = useState<boolean>(false);
  const [state,setState] = useState<StateDBInterface>({
    email:""
  })
  const saveEnrollment = (e:any)=>{
    try{
      console.log("save entrollment");
      setLoading(true);
      setTimeout(()=>{
        setShowBox(true);
        setLoading(false);
      },3000);
      e.preventDefault();
    }catch(error){
      console.error(error)
    }
  }
  const inputHandler = (e:any)=>{
    setState({
      ...state,
      [e.target.name]:e.target.value
    })
  }
  return (
    <>
    <div className="enrollment">
      <Container>
        <Row>
          <Col sm={12} md={12} lg={12}>
          <div className="top">
        <h2>Enrollment Form</h2>
        <button className="btn btn-link close" onClick={()=>onClose()}>
          <img src="/assets/images/close.svg" width="24" height="24" />
        </button>
      </div>
          </Col>
        </Row>
      </Container>
     
     
      <Container>
        <Row>
          <Col sm={12} md={12} lg={6} className="videoCol">
            <video width="320" height="240" controls>
              <source src="/assets/video/2.mp4" type="video/mp4" />
            </video>
          </Col>
          <Col sm={12} md={12} lg={6} className="enrollmentForm">
            <form action="#" method="post" className="siteForm ">
              <div className="fieldheader">
                <h3>Personal Information</h3>
                <span>Make sure you provide correct personal details</span>
              </div>
              {/* <div className="form-group withIcon">
                <label htmlFor="full-name">Full Name</label>
                <div className="iconInput">
                    <img src="/assets/images/user.svg" width="16" height="16" />
                    <input
                  type="text"
                  required
                  className="form-control"
                  id="full-name"
                  aria-describedby="fullname"
                  placeholder="Your Name"
                />
                </div>
              
              </div> */}
              <div className="form-group">
               
                 <label htmlFor="full-name">Full Name</label>
                 
                    <input
                    tabIndex={1}
                  type="text"
                  
                  className="form-control"
                  id="full-name"
                  aria-describedby="fullname"
                  placeholder="Your Name"
                />
               
              
              </div>
              <div className="form-group">  
               
               <label htmlFor="contact-email">Contact Email</label>
                <input
                tabIndex={2}
                  type="email"
                  name="email"
                  value={state.email}
                  onChange={inputHandler}
                  required
                  className="form-control"
                  id="contact-email"
                  aria-describedby="contact email"
                  placeholder="Your Email Address"
                />
                
               
              </div>
              <div className="form-group">
              <label htmlFor="contact-email">Your Company (Optional)</label>
                <input
                  type="text"
                  tabIndex={3}
                  className="form-control"
                  id="contact-email"
                  aria-describedby="your company"
                  placeholder="Your Company Name"
                />
                  
              </div>
              <div className="fieldheader">
                <h3>Card Details</h3>
                <span>Secure your spot in the course with payment</span>
              </div>
              <div className="form-group">
               <label htmlFor="amount-paying">Amount you are paying</label>
                <input
                 tabIndex={4}
                  type="text"
                  className="form-control"
                  id="amount-paying"
                  aria-describedby="amount you are paying"
                  placeholder="Enter Amount you are paying"
                  required
                />
                 
              </div>
              <div className="form-group">
              
                <Form.Select tabIndex={5}>
                <option value="">Select type of enquiry ...</option>
                <option value="visa1">Visa </option>
                <option value="master">Master </option>
                <option value="paypal">Paypal </option>
      </Form.Select>
      {/* <label htmlFor="selectpayment" >Select payment option</label> */}
               
              </div>
              <div className="form-group">
               <label htmlFor="cardnumber">Card number</label>
                <input
                 tabIndex={6}
                  type="text"
                  className="form-control"
                  id="cardnumber"
                  aria-describedby="card number"
                  placeholder="Your Card number"
                  required
                />
                 
              </div>
            
              <div className="form-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                     tabIndex={7}
                      type="text"
                      className="form-control"
                      id="cvv"
                      aria-describedby="cvv"
                      placeholder="Your CVV"
                      maxLength={4}
                      required
                    />
                    
                  </div>
               
                  <div className="form-group">
                      <label htmlFor="exp">Expiration date</label>
                    <input
                     tabIndex={8}
                      type="text"
                      className="form-control"
                      id="exp"
                      aria-describedby="expiration date"
                      placeholder="Your Expiration Date"
                      required
                    />
                  
                  </div>
               
              <div className="fieldheader">
                <h3>Billing details</h3>
                {/* <span>Lorem ipsum dolor sit amet lorem</span> */}
              </div>
              <div className="form-group">
                    <label htmlFor="address1">Address line 1</label>
                    <input
                     tabIndex={9}
                      type="text"
                      className="form-control"
                      id="address1"
                      aria-describedby="address 1"
                      placeholder="House number and street name"
                    />
                    
                  </div>
                  <div className="form-group">
                    <label htmlFor="address2">Address line 2</label>
                    <input
                     tabIndex={10}
                      type="text"
                      className="form-control"
                      id="address2"
                      aria-describedby="address 2"
                      placeholder="Apartment, suite, unit, etc."
                    />
                    
                   
                  </div>
                  <div className="form-group">
                     <label htmlFor="towncity">Town/City</label>
                    <input
                     tabIndex={11}
                      type="text"
                      className="form-control"
                      id="towncity"
                      aria-describedby="Town City"
                      placeholder="Enter your city/town"
                    />
                   
                  </div>
                  <div className="form-group">
                   <label htmlFor="postcode">Postcode</label>
                    <input
                     tabIndex={12}
                      type="text"
                      className="form-control"
                      id="postcode"
                      aria-describedby="Postcode"
                      placeholder="Your Postcode Number"
                    />
                     
                  </div>
                  <div className="form-group d-flex justify-content-end btnList">
                  <button className="btn btn-link"  tabIndex={13} onClick={(e:any)=>{e.preventDefault(); setEnrollDoneStatus(true)}}>Cancel</button>
                    <button className="btn btn-primary"  tabIndex={12} type="button"  onClick={(e)=>saveEnrollment(e)} disabled={loading || state.email.length===0}>Enroll Me</button>
                  </div>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  
    <EnrollDone email={state.email} status={showBox} handleClose={()=>setShowBox(false)} />
      <CancelAlertBox
       handleClose= {()=>setEnrollDoneStatus(false)}
       status={enrollDoneStatus}
       title="Are you sure?"
       desc= "Thank you for your enquiry. We will be in touch with you soon."
       backBtnText="Back to form"
       cancelBtnText="Cancel Enrollment"
       onCancel= {()=>setEnrollDoneStatus(false)}
       />
    
</>
  );
}
