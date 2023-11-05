import React from 'react'
import Display from './display';
import Navi from './navbar';

function About(){
    return(
        <div>
            <Navi/>
            <Display content="About Page"/>
        </div>
    )
}

export default About;