import React from "react";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import VideoSection from "../components/VideoPart";
import WhoAreWe from "../components/WhoAreWe";


function HomePage() {
    return (

        <>  
            <Navbar/>
            <Intro/>
            {/* <VideoSection/> */}
            <WhoAreWe/>
            <Footer/>
           
        </>

    );
}

export default HomePage;