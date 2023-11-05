import React from 'react'
import Display from './display';
import Navi from './navbar';

function Home(){
    return(
        
        <div>
            <Navi/>
            <Display content="Home Page"/>
            <a href='www.google.com'>Google</a>
        </div>
    )
}

export default Home;