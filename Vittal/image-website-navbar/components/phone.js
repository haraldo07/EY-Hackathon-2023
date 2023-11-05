import React from "react";
import Display from "./display";
import NavBar from "./navbar";
import download from "./download.png";
function Phone(){
    return(
        <div>
            <NavBar/>
            <Display color="yellow" bg="green" content="Phone page"/>
            <Display color="yellow" bg="green" content="895631" size="10" />
            <img src={download} />
        </div>
    );   
}

export default Phone;