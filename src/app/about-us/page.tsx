
import FAQ from "@/ui/FAQ";
import HeaderPage from "@/ui/HeaderPage";
import LookingTransfer from "@/ui/LookingTransfer";
import NavBar from "@/ui/NavBar";
import SiteFooter from "@/ui/SiteFooter";
import WhyToChoose from "@/ui/WhyToChoose";
import { Container, Row, Col } from "react-bootstrap";



export default function Home() {
    return (
        <>
            <NavBar />
            <HeaderPage title="About Us" subtitle="Team behind Change IT" />
            <Container className="pageContent">
                <Row>
                    <Col sm={12} md={6}>
                        <h2>Innovate Evolve and Excel</h2>
                        <h2 className="extra">Inspiring Innovation. <span>From Vision to Reality</span> </h2>
                        <p>
                        At Change IT, our mission is to empower businesses through cutting-edge software solutions. With a commitment to innovation, we tailor our services to meet the unique needs of each client, driving digital transformation and sustainable growth.
                        </p>
                        <p>
                        Our team of experienced professionals combines technical expertise with a deep understanding of industry trends. We collaborate closely with our clients to create custom software that is not only functional but also scalable and future-proof.
                        </p>
                    </Col>
                    <Col sm={12} md={6}>
                        <img className="contImg img-fluid" src="/assets/images/pic.jpg" />
                    </Col>
                </Row>
            </Container>
            {/* <WhyToChoose /> */}
            {/* <LookingTransfer />
    <FAQ /> */}
            <SiteFooter />

        </>
    )
}
