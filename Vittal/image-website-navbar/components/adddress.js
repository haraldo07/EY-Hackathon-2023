import React from "react";
import Display from "./display";
import NavBar from "./navbar";
import download from "./download.png";
function Address(){
    return(
        <div>
            <NavBar/>
            <Display color="yellow" bg="green" content="Address page"/>
            <Display color="yellow" bg="green" content="jksdfnsd" size="10" />
            <img src={download} />
        </div>
    );   
}

export default Address;