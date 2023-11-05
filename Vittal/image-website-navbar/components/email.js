import React from "react";
import Display from "./display";
import NavBar from "./navbar";
import download from "./download.png";
function Email(){
    return(
        <div>
            <NavBar/>
            <Display color="yellow" bg="green" content="Email page"/>
            <Display color="yellow" bg="green" content="sdjhkvbds@gmail.com" size="10" />
            <img src={download} />
        </div>
    );   
}

export default Email;