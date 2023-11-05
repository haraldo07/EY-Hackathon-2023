import React from 'react'
import Display from './display';
import Navi from './navbar';

function Contact(){
    return(
        <div>
            <Navi/>
            <Display content="Contact Page"/>
        </div>
    )
}

export default Contact;