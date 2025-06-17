"use client";
import HeaderPage from "@/ui/HeaderPage";
import NavBar from "@/ui/NavBar";
import SiteFooter from "@/ui/SiteFooter";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
export default function Training (){
  const courses = [{
    id:1,
    title:"HTML5 & CSS3",
    img:"/assets/images/training1.jpg",
    hours:8,
    tag:"Career Role",
    url:"/training/html5/"
  },
  {
    id:2,
    title:"Java Script",
    img:"/assets/images/training1.jpg",
    hours:12,
    tag:"Career Role",
    url:"/training/javascript/"
  },
  {
    id:3,
    title:"C#.Net",
    img:"/assets/images/training1.jpg",
    hours:15,
    tag:"Career Role",
    url:"/training/c-sharp/"
  },
  {
    id:4,
    title:"Microsoft SQL Server",
    img:"/assets/images/training1.jpg",
    hours:15,
    tag:"Career Role",
     url:"/training/microsoft-sql-server/"
  },
  {
    id:5,
    title:"ASP.NET",
    img:"/assets/images/training1.jpg",
    hours:15,
    tag:"Career Role",
     url:"/training/asp-dotnet/"

  },
  {
    id:6,
    title:"Microsoft Azure",
    img:"/assets/images/training1.jpg",
    hours:15,
    tag:"Career Role",
     url:"/training/microsoft-azure/"
  }
  ]
    return (<div className="training">
        <NavBar />
        <HeaderPage title="Training" subtitle="Our hands-on training programs are designed to boost your technical expertise." />
        <div className="trainingProgram">
      <Container>
        <Row>
         
          <Col lg={{ span: 8, offset: 2 }} md={12} sm={12}>
          <div className="trainingSection">  <h2>Elevate Your Skills with Our IT Training Programs</h2>
            <p >
              Our hands-on training programs are designed to boost your
              technical expertise.
            </p></div>
          
          </Col>
        </Row>
        <Row  className="trainingData">
          {
            courses.length && courses.map(item=>{
              return (<Col sm={12} md={6} lg={4} key={item.id}>
                <div className="item">
                  <h3>{item.title}</h3>
                  <div className="tags">
                    <div className="tag">36 Hours</div>
                    <div className="tag">Career Role</div>
                  </div>
                  <Link href={item.url}>
                  <img src={item.img} className="img-fluid" />
                  </Link>
                  
                </div>
              </Col>)
            })
          }
          
        </Row>
       
   

        <Row>
            <Col className="paginationBlock">
              <Pagination>
              {/* <li className="page-item prev"><a className="page-link" role="button"  href="#">Previous</a></li> */}
                {/* <Pagination.Prev /> */}
                <Pagination.Item>{1}</Pagination.Item>
                {/* <Pagination.Ellipsis /> */}

                <Pagination.Item>{2}</Pagination.Item>
                <Pagination.Item>{3}</Pagination.Item>
                {/* <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis /> */}
                {/* <Pagination.Item>{20}</Pagination.Item> */}
               
                {/* <li className="page-item next"><a className="page-link" role="button"  href="#">Next</a></li> */}
              </Pagination>
            </Col>
          </Row>
      </Container>
    </div>
        <SiteFooter />
    </div>)
}