import Image from "next/image";
import Navbar from "@/components/Home2/Navbar";

import Hero from "@/components/Homepage/Hero";
import Main from "@/components/Home2/Main";
import AboutUs from "@/components/Home2/AboutUs";
import MentorCard from "@/components/Home2/MentorCard";
import Service from "@/components/Home2/Service";
// import Studentabout from "@/components/Home2/StudentaboutCompo";
import Studentabout from "@/components/Home2/Studentabout";
import TopperStudent from "@/components/Home2/TopperStudent";
import FeedbackCard from "@/components/Home2/FeedbackCard";
import FAQSection from "@/components/Home2/FAQSection";
import Footer from "@/components/Home2/Footer";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Main/>
    <AboutUs/>
    <MentorCard/>
    <Service/>
    <Studentabout/>
    <TopperStudent/>
   {/* <FeedbackCard/> */}
   <FAQSection/>
   <Footer/>
   
    </>
  );
}
