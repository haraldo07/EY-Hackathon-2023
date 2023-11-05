import React from "react";
import Display from "./display";
import NavBar from "./navbar";
import download from "./download.png";
function Contact(){
    return(
        <div>
            <NavBar/>
            <Display color="yellow" bg="green" content="Contact page"/>
            <Display color="yellow" bg="green" content="Refer dropdown" size="10" />
            <img src={download} />
        </div>
    );   
}

export default Contact;