import React from "react";
import Footer from "../components/Footer";
import Intro from "../components/Intro";
import Navbar from "../components/Navbar";
import VideoSection from "../components/VideoPart";


function HomePage() {
    return (

        <>  
            <Navbar/>
            <Intro/>
            <VideoSection/>
            <Footer/>
        </>

    );
}

export default HomePage;