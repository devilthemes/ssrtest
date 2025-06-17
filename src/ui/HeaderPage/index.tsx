"use client"
import { Container,Row,Col } from "react-bootstrap"
interface headerPageInterface {
    title:string;
    subtitle:string;
}
export default function HeaderPage ({title="",subtitle=""}:headerPageInterface){
    return (
        <div className="headerPage">
            <Container>
                <Row>
                    <Col><h1 className="pageTitle">{title}</h1>
                    <p className="pageInfo">{subtitle}</p></Col>
                </Row>
            </Container>
            
        </div>
    )
}