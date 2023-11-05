import React from "react";
import Display from "./display";
import NavBar from "./navbar";
import download from "./download.png";
function Home(){
    return(
        <div>
            <NavBar/>
            <Display color="blue" bg="grey" content="Home page"/>
            <img src={download} />
        </div>
    );   
}

export default Home;