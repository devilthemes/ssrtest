"use client";
import { useState, useRef } from "react";
import Toaster from "../Toaster";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import Script from "next/script";
interface EnquiryNowInterface {
  onClose: () => void;
}
interface ToasterInterface {
  status: boolean;
  title: string;
  desc: string;
  variant: string;
}
interface RequestBodyInterface {
  formType: string;
  firstName: string;
  lastName: string;
  companyName: string;
  email: string;
  phone: string;
  enquiryType: string;
  street: string;
  streetLine2: string;
  city: string;
  region: string;
  postcode: string;
  country: string;
  message: string;
  dateSubmitted: Date;
}
export default function EnquiryNow({
  onClose = () => {},
}: EnquiryNowInterface) {
  const url = process.env.NEXT_PUBLIC_API_URL + "/api/Enquiry/saveEnquiry";
  {
    /*
      Sample Filled Data
      {
    formType: "individual",
    firstName: "hirakumar",
    lastName: "maharjan",
    companyName: "",
    email: "hirakumar@gmail.com ",
    phone: "986545",
    enquiryType: "General",
    street: "mephi-16",
    streetLine2: "Dabhu marg",
    city: "kathmandu",
    region: "bagmati",
    postcode: "977",
    country: "nepal",
    message: "testing only",
    dateSubmitted: new Date(),
  }
      */
  }
  interface EachValidateInterface {
    started:boolean,
    msg:string
  }
interface ValidateInterface {
  firstName:EachValidateInterface;
  companyName:EachValidateInterface;
  email:EachValidateInterface;
  phone:EachValidateInterface;
  message:EachValidateInterface;
  status:boolean

}
  // const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [loading, setLoading] = useState(false);
  const phoneRegx = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
  const emailRegx = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim;
  const [requestData, setRequestData] = useState<RequestBodyInterface>({
    formType: "Individual",
    firstName: "",
    lastName: "",
    companyName: "",
    email: "",
    phone: "",
    enquiryType: "",
    street: "",
    streetLine2: "",
    city: "",
    region: "",
    postcode: "",
    country: "",
    message: "",
    dateSubmitted: new Date(),
  });
  const [validate, setValidate] = useState<ValidateInterface>({
    firstName: {
      started: false,
      msg: "",
    },
    companyName: {
      started: false,
      msg: "",
    },
    email: {
      started: false,
      msg: "",
    },
    phone: {
      started: false,
      msg: "",
    },
    message: {
      started: false,
      msg: "",
    },
    status: false,
  });
  const [toast, setToast] = useState<ToasterInterface>({
    status: false,
    title: "Enquiry created successfully.",
    desc: "Thank you for your enquiry. We will be in touch with you soon.",
    variant: "success",
  });
  const [captchaVerified, setCaptchaVerified] = useState<boolean>(false);
  const validateCompanyName = (e:any)=>{
    let myValidaton = {...validate};
    if(e.target.value.length===0){
      console.log("c1")
      myValidaton.companyName.msg=e.target.getAttribute('aria-describedby') +" is required.";     
    }else if(e.target.value.length<3){
      
      myValidaton.companyName.msg=e.target.getAttribute('aria-describedby') +"  is too short.";
    }else if(e.target.value.length>50){
      
      myValidaton.companyName.msg=e.target.getAttribute('aria-describedby') +"  is too long.";
    }else{
      
      myValidaton.companyName.msg=""
    }
    myValidaton.companyName.started = true;
    setValidate(myValidaton)
  }
  const validateEmail = (e:any)=>{
    let myValidaton = {...validate};
    if(e.target.value.length===0){
      myValidaton.email.msg=e.target.getAttribute('aria-describedby') +" is required.";
    }else if(!emailRegx.test(e.target.value)){      
      myValidaton.email.msg=e.target.getAttribute('aria-describedby') +"  is invalid.";
    }else{      
      myValidaton.email.msg=""
    }
    myValidaton.email.started = true;
    setValidate(myValidaton)
  }
  const validateFirstName = (e:any)=>{
    let myValidaton = {...validate};
    if(e.target.value.length===0){
      console.log("c1")
      myValidaton.firstName.msg=e.target.getAttribute('aria-describedby') +" is required.";     
    }else if(e.target.value.length<3){
      
      myValidaton.firstName.msg=e.target.getAttribute('aria-describedby') +"  is too short.";
    }else if(e.target.value.length>50){
      
      myValidaton.firstName.msg=e.target.getAttribute('aria-describedby') +"  is too long.";
    }else{
      
      myValidaton.firstName.msg=""
    }
    myValidaton.firstName.started = true;
    setValidate(myValidaton)
  }

  const validateMessage = (e:any)=>{
    let myValidaton = {...validate};
    if(e.target.value.length===0){
      myValidaton.message.msg=e.target.getAttribute('aria-describedby') +" is required.";     
    }else if(e.target.value.length<3){
      
      myValidaton.message.msg=e.target.getAttribute('aria-describedby') +"  is too short.";
    }else if(e.target.value.length>5000){
      
      myValidaton.message.msg=e.target.getAttribute('aria-describedby') +"  is too long.";
    }else{
      
      myValidaton.message.msg=""
    }
    myValidaton.message.started = true;
    setValidate(myValidaton)
  }

  const validatePhone = (e:any)=>{
    let myValidaton = {...validate};
    if(e.target.value.length===0){
      console.log("c1")
      myValidaton.phone.msg=e.target.getAttribute('aria-describedby') +" is required.";     
    }else if(!phoneRegx.test(e.target.value)){      
      myValidaton.phone.msg=e.target.getAttribute('aria-describedby') +"  is invalid.";
    }else{      
      myValidaton.phone.msg=""
    }
    myValidaton.phone.started = true;
    setValidate(myValidaton)
  }
  const inquiryHandler = (e: any) => {
    setRequestData({
      ...requestData,
      [e.target.name]: e.target.value,
      firstName: e.target.value === "Individual" ? requestData.firstName : "",
      companyName: e.target.value === "Company" ? requestData.companyName : "",
    });
  


  };
  const inputHandler = (e: any) => {
    setRequestData({
      ...requestData,
      [e.target.name]: e.target.value,
    });

    switch(e.target.name){
      case "firstName":
      validateFirstName(e);
      break;
      case "companyName":
      validateCompanyName(e);
      break;
      case "email":
        validateEmail(e);
        break;
      case "phone":
        validatePhone(e);
        break;
      case "message":
        validateMessage(e);
        break;

    }
    
  
  };
  const normalTxtValidation = ({value,validationObj,label}:any)=>{
    try{
      if(value.length===0){
        validationObj.msg=label +" is required."
       
      }else if(value.length<3){
        validationObj.msg=label +"  is too short."
      }else if(value.length>50){
        validationObj.msg=label +"  is too long."
      }else{
        validationObj.msg=""
      }
      validationObj.started = true;
    }catch(error){
      console.error(error)
    }
  }
  const messageValidation = ({value,validationObj,label}:any)=>{
    try{
      if(value.length===0){
        validationObj.msg=label +" is required."
       
      }else if(value.length<3){
        
        validationObj.msg=label +"  is too short."
      }else if(value.length>5000){
        validationObj.msg=label +"  is too long."
      }else{
        validationObj.msg=""
      }
      validationObj.started = true;
    }catch(error){
      console.error(error)
    }
  }
  const phoneValidation =({value,validationObj,label}:any)=>{
    if(value.length===0){
      validationObj.msg=label + " is required.";       
    }else if(!phoneRegx.test(value)){
      validationObj.msg=label + " is invalid.";   
    }else{
      validationObj.msg=""
    }
    validationObj.started = true;
  }
  const emailValidation = ({value,validationObj,label}:any)=>{
   if(value.length===0){
      validationObj.msg=label + " is required.";       
    }else if(!emailRegx.test(value)){
      validationObj.msg=label + " is invalid.";   
    }else{
      validationObj.msg=""
    }
    validationObj.started = true;
  }
  const checkValidation = () => {
    try {
      console.log("Checking validation");
      const {formType,companyName,firstName,email,phone,message} = {...requestData};
      let myValidation = {...validate};

      // Validation for FirstName or Company Name
      if(formType==="Individual"){
        // First Name is required
        normalTxtValidation({value:firstName,validationObj:myValidation.firstName,label:"First Name"});      
        
      }else{
        // Company Name is required
        normalTxtValidation({value:companyName,validationObj:myValidation.companyName,label:"Company Name"});
      }

      // Email Validation
      emailValidation({value:email,validationObj:myValidation.email,label:"Email"})

      // Phone
      phoneValidation({value:phone,validationObj:myValidation.phone,label:"Phone"});     
      
      messageValidation({value:message,validationObj:myValidation.message,label:"Message"})

      // Validation for Email
      
      let status = false;
      if(requestData.formType === "Company" && myValidation.companyName.msg.length > 0){
        status =false;    
      }else if(requestData.formType === "Individual" && myValidation.firstName.msg.length > 0){
        status =false;    
      }else if(    
        myValidation.email.msg.length>0 
        || myValidation.phone.msg.length>0 
        || myValidation.message.msg.length>0
      ){        
        status =false;       
      }else{
        status =true;
      }
      setValidate({
        ...validate,
        status
      });
      return status;
     
    } catch (error) {
      console.log(error);
    }
  };
  const sendEnquiryForm = (e: any) => {
   
       
    try {
      setLoading(true); // Disable button after first click
      if(checkValidation()){
        /*
        let data = JSON.parse(JSON.stringify(requestData));
        data.message = data.message.replace(/<[^>]+>/g, "");
        
        setTimeout(()=>{
          setToast({
            ...toast,
            title: "Enquiry created successfully.",
            desc: "Thank you for your enquiry. We will be in touch with you soon.",
            status: true,
            variant: "success",
          });
        },3000)
        */
        fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        })
          .then((response:any) => {
            console.log(response);
            if (!response.ok) {
              
              return response.text().then((text:any) => {
                throw new Error(text);
              });
            }
            return response.json();
          })
          .then((data) => {
            console.log("Success:", data);
            if (data.success) {
              setToast({
                ...toast,
                title: "Enquiry created successfully.",
                desc: "Thank you for your enquiry. We will be in touch with you soon.",
                status: true,
                variant: "success",
              });
            }
          })
          .catch((error) => {
            console.log(error);
            let myError = Object.assign(error, {});
            let errorobj = myError.toString().replace("Error: ", "");
            errorobj = JSON.parse(errorobj);
            let errorList = getSecondLevelValues(errorobj.errors);
            setToast({
              ...toast,
              title: "",
              desc: errorList.join(","),
              status: true,
              variant: "danger",
            });
          });
          
      }
      e.preventDefault();
      
    } catch (error) {
      console.error(error);
      setToast({
        ...toast,
        title: "",
        desc: "Something went wrong while send form",
        status: true,
        variant: "danger",
      });
    } finally {
      setLoading(false); // Re-enable button after request is complete
    }
  };

  async function handleCaptchaSubmission(token: string | null) {
    try {
      if (token) {
        await fetch("/api", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ token }),
        });
        setIsVerified(true);
      }
    } catch (e) {
      setIsVerified(false);
    }
  }

  const handleChange = (token: string | null) => {
    handleCaptchaSubmission(token);
  };

  function handleExpired() {
    setIsVerified(false);
  }
  function getSecondLevelValues(obj: any) {
    let result: any = [];

    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        // If the value is an array, merge it into the result array
        result = result.concat(obj[key]);
      } else if (typeof obj[key] === "object") {
        // If the value is an object, recursively get the second-level values
        result = result.concat(getSecondLevelValues(obj[key]));
      }
    }

    return result;
  }

  return (
    <Modal show={true} onHide={onClose} className="enquiryModal">
      <Modal.Body>
       
        <div>
          <div className="enquiryNow">
            <div className="top">
              {/* <button className="btn btn-link close" onClick={onClose}>
            <img src="/assets/images/modal-cross.svg" width="24" height="24" />
          </button> */}
            </div>

            <form
              action="#"
              method="post"
              className="siteForm"
              onSubmit={sendEnquiryForm}
              noValidate
            >
                <h4>Enquiry</h4>
              <div className="form-group enquiryFor d-none">
                <label className="label inquirylabel d-none" htmlFor="full-name">
                  Enquiry For
                </label>
                <div className="radioInput ">
                  <label
                    className={`form-check ${
                      requestData.formType === "Individual" ? "active" : ""
                    }`}
                  >
                    <input
                      tabIndex={1}
                      className="form-check-input"
                      name="formType"
                      type="radio"
                      value="Individual"
                      onChange={(e) => inquiryHandler(e)}
                      checked={requestData.formType === "Individual"}
                      id="inquirytype1"
                    />
                    <div className="form-check-label">Individual</div>
                  </label>
                  <label
                    className={`form-check ${
                      requestData.formType === "Company" ? "active" : ""
                    }`}
                  >
                    <input
                      tabIndex={2}
                      className="form-check-input"
                      type="radio"
                      name="formType"
                      value="Company"
                      onChange={(e) => inquiryHandler(e)}
                      id="inquirytype2"
                      checked={requestData.formType === "Company"}
                    />
                    <div className="form-check-label">Company</div>
                  </label>
                </div>
              </div>
              {requestData.formType === "Individual" && (
                <>
                  <div className="form-group ">
                    <input
                      tabIndex={3}
                      type="text"
                      name="firstName"
                      className={`form-control ${validate.firstName.started && validate.firstName.msg.length >0 ? 'is-invalid':""}`}
                      aria-describedby="Full name"
                      id="floatingInput"
                      placeholder="Name"
                      onChange={(e) => inputHandler(e)}
                      value={requestData.firstName}
                      maxLength={50}
                      required
                    />
                    {
                      validate.firstName.started && validate.firstName.msg.length >0 &&  <div className="invalid-feedback">
                      {validate.firstName.msg}
                    </div>
                    }
                    
                  </div>
                </>
              )}

              {requestData.formType === "Company" && (
                <div className="form-group d-none">
                  <input
                    tabIndex={3}
                    required
                    className={`form-control ${validate.companyName.started && validate.companyName.msg.length >0 ? 'is-invalid':""}`}
                    id="company-name"
                    aria-describedby="Company Name"
                    placeholder="Company Name"
                    name="companyName"
                    value={requestData.companyName}
                    onChange={(e) => inputHandler(e)}
                    maxLength={100}
                  />
                  {
                      validate.companyName.started && validate.companyName.msg.length >0 &&  <div className="invalid-feedback">
                      {validate.companyName.msg}
                    </div>
                    }
                </div>
              )}

              <div className="form-group">
                <input
                  tabIndex={5}
                  type="email"
                  className={`form-control ${validate.email.started && validate.email.msg.length >0 ? 'is-invalid':""}`}
                  id="email"
                  name="email"
                  aria-describedby="Email"
                  placeholder="Email"
                  value={requestData.email}
                  required
                  onChange={(e) => inputHandler(e)}
                />
                 {
                      validate.email.started && validate.email.msg.length >0 &&  <div className="invalid-feedback">
                      {validate.email.msg}
                    </div>
                    }
              </div>

              <div className="form-group">
                <input
                  tabIndex={6}
                  type="tel"
                  className={`form-control ${validate.phone.started && validate.phone.msg.length >0 ? 'is-invalid':""}`}
                  id="phone"
                  name="phone"
                  aria-describedby="Phone"
                  placeholder="Phone"
                  value={requestData.phone}
                  onChange={(e) => inputHandler(e)}
                  // pattern="^\+?[1-9]\d{1,14}$"  // Basic pattern for phone numbers (international format)
                  title="Type a valid phone number"
                  required
                />
                 {
                      validate.phone.started && validate.phone.msg.length >0 &&  <div className="invalid-feedback">
                      {validate.phone.msg}
                    </div>
                    }
              </div>

              <div className="form-group ">
                <Form.Select
                  tabIndex={7}
                  onChange={(e) => inputHandler(e)}
                  aria-label="Enquiry Type"
                  id="enquiryType"
                  value={requestData.enquiryType}
                  name="enquiryType"
                >
                  <option value="">Enquiry Type ...</option>
                  <option value="Sample Enquiry Value 1">
                    Sample enquiry value 1
                  </option>
                  <option value="Sample Enquiry Value 2">
                    Sample enquiry value 2
                  </option>
                </Form.Select>
              </div>
              <div className="form-group">
                <textarea
                  tabIndex={8}
                  name="message"
                  className={`form-control ${validate.message.started && validate.message.msg.length >0 ? 'is-invalid':""}`}
                  id="message"
                  aria-describedby="Message"
                  placeholder="Message"
                  onChange={(e) => inputHandler(e)}
                  defaultValue={requestData.message}
                  maxLength={4000}
                  required
                ></textarea>
                {
                      validate.message.started && validate.message.msg.length >0 &&  <div className="invalid-feedback">
                      {validate.message.msg}
                    </div>
                    }
              </div>

              <div className="form-group">
                <input
                  tabIndex={9}
                  type="text"
                  name="street"
                  className="form-control"
                  aria-describedby="Full name"
                  id="street"
                  placeholder="Address Line 1"
                  onChange={(e) => inputHandler(e)}
                  value={requestData.street}
                  maxLength={100}
                />
              </div>

              <div className="form-group">
                <input
                  tabIndex={10}
                  type="text"
                  className="form-control"
                  id="streetLine2"
                  name="streetLine2"
                  aria-describedby="address2"
                  placeholder="Address 2"
                  onChange={(e) => inputHandler(e)}
                  value={requestData.streetLine2}
                  maxLength={100}
                />
              </div>
              <div className="form-group">
                <input
                  tabIndex={11}
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  aria-describedby="phone"
                  placeholder="Your town/city"
                  onChange={(e) => inputHandler(e)}
                  value={requestData.city}
                  maxLength={50}
                />
              </div>
              <div className="countyrow">
                <div className="countycol">
                  <div className="form-group">
                    <input
                      tabIndex={12}
                      type="text"
                      className="form-control"
                      id="county"
                      name="country"
                      aria-describedby="county"
                      placeholder="Your county"
                      onChange={(e) => inputHandler(e)}
                      value={requestData.country}
                      maxLength={50}
                    />
                  </div>
                </div>
                <div className="countycol">
                  <div className="form-group">
                    <input
                      tabIndex={13}
                      type="text"
                      className="form-control"
                      id="postcode"
                      name="postcode"
                      aria-describedby="postcode"
                      placeholder="Your postcode"
                      onChange={(e) => inputHandler(e)}
                      value={requestData.postcode}
                      maxLength={20}
                    />
                  </div>
                </div>
              </div>

               {/* <div className="captcha">
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ""}
                  ref={recaptchaRef}
                  onChange={handleChange}
                  onExpired={handleExpired}
                />
              </div>  */}
              <div className="form-group d-flex justify-content-end btnList">
                <button
                  type="reset"
                  className="btn btn-link"
                  onClick={onClose}
                  tabIndex={15}
                >
                  Cancel
                </button>

                <button
                  className="g-recaptcha btn btn-primary"
                  type="submit"                 
                  tabIndex={15}                >
                  {loading == true ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </div>
          {/* <CancelAlertBox
        status={alertStatus}
        onCancel={() => {}}
        handleClose={() => {}}
        title="Are you sure?"
        desc="Thank you for your enquiry. We will be in touch with you soon."
        backBtnText="Back to form"
        cancelBtnText="Cancel Enrollment"
      /> */}

          {toast.status && (
            <Toaster
              variant={toast.variant}
              title={toast.title}
              onClose={() => {
                setToast({
                  ...toast,
                  status: true,
                });

                onClose();
              }}
              onError={() => {
                setToast({
                  ...toast,
                  status: false,
                });
              }}
              desc={toast.desc}
            />
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}
