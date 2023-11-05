import React from "react";
import Display from "./display";
import NavBar from "./navbar";
import download from "./download.png";
function About(){
    return(
        <div>
            <NavBar/>
            <Display color="white" bg="black" content="About page"/>
            <img src={download} />
        </div>
    );   
}

export default About;