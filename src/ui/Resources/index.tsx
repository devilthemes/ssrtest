import { Container } from "react-bootstrap";

export default function Resources (){
    
    return (
        <div className="resources">
           <h3  className="txt-md-700 ">Resources</h3>
           <ul>
                <li>
                    <div className="left">
                        <div className="resourceinfo">
                            <div className="img">
                                <img src="/assets/images/pdf.svg" />
                            </div>
                            <div className="resourceCont">
                                    <h3>Document 1</h3>
                                    <div className="info">Info related to document</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="right">
                        <a href="#" className="primaryButton">Download</a>
                    </div>
                </li>
                <li>
                    <div className="left">
                        <div className="resourceinfo">
                            <div className="img">
                                <img src="/assets/images/pdf.svg" />
                            </div>
                            <div className="resourceCont">
                                    <h3>Document 1</h3>
                                    <div className="info">Info related to document</div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="right">
                        <a href="#" className="primaryButton">Download</a>
                    </div>
                </li>
           </ul>
        </div>
    )
}