import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Display from './display';
import BootButton from './button';
import Input from './input';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';
import { credcheck } from './data';

function Login(){
        const[email,setemail]=useState();
        const[password,setpassword]=useState();
        const navigate=useNavigate();

        const submit=()=>{
            const ml=credcheck
            console.log(ml);
            const match=ml.find(
                (c)=>c.email===email && c.password===password
            );
            if (match){
                return navigate('/nextpage');
            }
            else{
                alert("Fail");
            }
        }


        return(
        <div>
            <Display content='Login Page'/>
            <br/>
            <Container className='con'>
                <Input id='email' type='text' value={email} label='Email:'  fun={(e)=>setemail(e.target.value)}/>
                <br/>
                <Input id='password' type='password' value={password} label='Password:'  fun={(e)=>setpassword(e.target.value)}/>
                <br/>
                <BootButton content='Login' color='green' fun={submit}/>
                <br/>
                <Link to="/newuser">Signup</Link>
            </Container>
            
        </div>

    )
}

export default Login;