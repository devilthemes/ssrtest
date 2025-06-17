"use client";
import CourseContent from "@/ui/CourseContent";
import CourseInfo from "@/ui/CourseInfo";
import Enrollment from "@/ui/Enrollment";
import NavBar from "@/ui/NavBar";
import PageBreadCrumb from "@/ui/PageBreadCrumb";
import Resources from "@/ui/Resources";
import SiteFooter from "@/ui/SiteFooter";
import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
export default function TrainingDetail() {
  const vid = useRef<HTMLVideoElement>(null);
  const [enrollmentStatus,setEnrollmentStatus] = useState(false);
  const [show,setShow] = useState(true);

  const playVideo = (e:any)=>{
    vid.current && vid.current.play();
    setShow(false);
  }
  return (
    <>
      <NavBar />
      <PageBreadCrumb />

      <CourseInfo
        title="Java Script"
        price={240}
        hours={36}
        modules={15}
        desc="Learn the basic concepts of data analytics, AI, business
              intelligence, big data, machine learning, and deep learning. Build
              generative AI skills for data analytics. Enhance your career as a
              data analyst with knowledge of generative AI! No prior experience
              necessary."
      />
    <div className="courseContent">
        <Container>
          <Row>
            <Col sm={12} md={12} lg={7}>
              <Tabs
                defaultActiveKey="learn"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
              <Tab eventKey="learn" title="What you'll learn">
                  <div className="tabContBlock">
    <div className="tabblock py-4 border-bottom">
                    <h3 className="txt-md-700 ">
                      Evolution of Data Analysis
                    </h3>
                    <p className="txt-md-300 color-ch-neutral-500">
                      A brief overview of the history of analyzing data, from
                      medieval statistics to the sophisticated techniques.
                    </p>
                  </div>
                  <div
                   
                    className="tabblock py-4 border-bottom"
                  >
                    <h3 className="txt-md-700">
                      Managing the Explosion of Big Data
                    </h3>
                    <p className="color-ch-neutral-500 txt-md-300">
                      A look at data stores, which are growing exponentially,
                      and the challenges of wrangling "big data."
                    </p>
                  </div>
              
                  <div  className="tabblock py-4">
                    <h3 className="txt-md-700">Data Mining Explained</h3>
                    <p className="txt-md-300">
                      Understanding of data mining—what it entails, different
                      approaches, and who's leading the way.
                    </p>
                  </div>
                  <div
                  
                    className="tabblock py-4"
                  >
                    <h3 className="txt-md-700">Evolution of Data Analysis</h3>
                    <p className="txt-md-300">
                      An overview of specific analytics processes and models.
                    </p>
                  </div>
                  </div>
              
              
                  <div className="skillsBlock">
                    {" "}
                    <h3 className="txt-md-700 ">Skills you gain</h3>
                    <div className="skills-tabs">
                      <div className="tablet">Data Analysis</div>
                      <div className="tablet">Data Visualization</div>
                      <div className="tablet">AI Concepts</div>
                      <div className="tablet">Business Analytics</div>
                      <div className="tablet">Spreadsheet</div>
                      <div className="tablet">Microsoft Excel</div>
                    </div>
                    <CourseContent />
                  </div>
                
                  <div>
                    <Resources />
                  </div>
              
              </Tab>
                <Tab eventKey="skills" title="Skills">
                  Tab content for skills
                </Tab>
                <Tab eventKey="course" title="Course Content">
                  Tab content for course
                </Tab>
                <Tab eventKey="resource" title="Resources">
                  Tab content for resource
                </Tab>
              </Tabs>
            </Col>
            <Col sm={12} md={12} lg={5}>
              <div className="enrollbox">
                <div className="video">
                <video width="320" height="240" controls ref={vid}>
                  <source src="/assets/video/1.mp4" type="video/mp4" />
                </video>
                {
                  show &&  <button className="play" onClick={playVideo}><img src="/assets/images/play.svg" /></button>
                }
               
                </div>
              
                <div className="btns">
                <a href="#" className="largeBtn" onClick={()=>setEnrollmentStatus(true)}>Enroll Now</a>
                <a href="#"  className="largeBtnSecondary"><img width="24" height="24" src="/assets/images/download-icons.svg" /> <span>Download Curriculum</span> </a>
                </div>
                <h3>What's Included in this course</h3>
                <ul>
                  <li>36 Hours on-demand video</li>
                  <li>2 downloadable resources</li>
                  <li>Certificate of completion</li>
                </ul>
              </div>
            </Col>
          </Row>
         
        </Container>
      </div>

      <SiteFooter />
      {
        enrollmentStatus &&  <Enrollment onClose={()=>setEnrollmentStatus(false)} />
      }
     
    </>
  );
}
