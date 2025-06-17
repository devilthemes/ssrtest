
import FAQ from "@/ui/FAQ";
import HeaderPage from "@/ui/HeaderPage";
import LookingTransfer from "@/ui/LookingTransfer";
import NavBar from "@/ui/NavBar";
import SiteFooter from "@/ui/SiteFooter";
import WhyToChoose from "@/ui/WhyToChoose";
import { Container,Row,Col } from "react-bootstrap";



export default function Home() {
  return (
   <>
    <NavBar />
    <HeaderPage title="Digital Marketing " subtitle="Amplify Your Online Presence" />
    <Container className="pageContent">
        <Row>
            <Col sm={12} md={6}>
                <h2>Innovate Evolve and Excel</h2>
                <h2 className="extra">Crafted for your vision. <span>Powered by our expertise</span> </h2>
                <p>
                Leverage our expert team to develop and deliver your software projects using best practice methodologies. We transform your ideas into robust, scalable, and maintainable software solutions that drive your business forward.
                </p>
                <p>
                Let's build something amazing together. Our collaborative approach ensures your vision is at the heart of every stage, from concept to launch. With our seasoned developers and proven methodologies, we deliver high-quality software solutions tailored to your unique needs.
                </p>
            </Col>
            <Col  sm={12} md={6}>
                <img className="contImg img-fluid" src="/assets/images/pic.jpg" />
            </Col>
        </Row>
    </Container>
    <WhyToChoose />
    <LookingTransfer />
    <FAQ />
   <SiteFooter />
  
    </>
  )
}
