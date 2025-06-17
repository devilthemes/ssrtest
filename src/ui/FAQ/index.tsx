"use client"
import { Container, Row,Col } from "react-bootstrap";
import { useState } from "react";

export default function FAQ (){
    const [activeid,setActiveId] = useState(0);
    const data = [
        {id:1,title:"What is your process for starting a new software development project?",desc:" We start with a consultation, followed by analysis, project planning, and regular updates during development."},
        {id:2,title:"What services does your software development company offer",desc:"  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"},
        {id:3,title:"How do you ensure the quality of your software projects?",desc:"  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat null pariatur. Excepteur sint occaecat cupidatat non proident, sunt in"}
    ]
    const showIT = (id:number)=>{
        if(id === activeid){
            setActiveId(0)
        }else{
            setActiveId(id)
        }
       
    }
    return (
        <div className="faq section">
            <Container>
                <Row>
                    <Col sm={12} md={12} lg={{span:8, offset:2}}>
                        <h2 className="h2 sectionHeader">Software Development FAQ</h2>

                        <div className="accordianData">
                           {
                            data.map((item)=>{
                                return <div key={item.id} className={`${activeid === item.id ? 'active' :' '} item`}> 
                                        <button onClick={()=>showIT(item.id)}>
                                            <span>{item.title}</span>
                                            <img src="/assets/images/chevron-down.svg" width="35" height="37" />
                                           
                                        </button>
                                        <div className="accordianBody">
                                            {item.desc}
                                        </div>

                                </div>
                            })
                           }
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}