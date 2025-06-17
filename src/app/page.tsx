import HomeBanner from "@/ui/HomeBanner";
import ImpactClient from "@/ui/ImpactClient";
import NavBar from "@/ui/NavBar";
import NeedBoost from "@/ui/NeedBoost";
import OurServices from "@/ui/OurServices";
import SiteFooter from "@/ui/SiteFooter";
import TrainingProgram from "@/ui/TrainingProgram";
import ValuedClient from "@/ui/ValuedClient";
import WorldStreet from "@/ui/WorldStreet";
import EnquiryNow from "@/ui/EnquiryNow";
import Script from "next/script";
import { notFound } from 'next/navigation';
export default async function Home() {


  return (
   <>

    <NavBar  />
     <HomeBanner /> 
    <ValuedClient />
    <ImpactClient />
    <OurServices />
    <TrainingProgram />
    <NeedBoost />
    <WorldStreet />
   
    <SiteFooter />
    {/* {
      enquiryNowStatus &&   <EnquiryNow onClose={()=>setEnquiryNowStatus(false)} />
    } */}
   {/* <Script src="https://www.google.com/recaptcha/enterprise.js?render=6LckVPwqAAAAAExAwvG8tG-9K2JF_TpK2O-a4G-3"></Script> */}
  
    </>
  )
}
