import 'bootstrap/dist/css/bootstrap.min.css';
import BootButton from './button';
import Display from './display';
import Input from './input';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';


function Login(){
    const[name,setname]=useState('');
    const[email,setemail]=useState('');
    const[password,setpassword]=useState('');
    const navigate=useNavigate();
    const credcheck=[
        {email:"example1@snuchennai.edu.in",password:"Example1"},
        {email:"example12@snuchennai.edu.in",password:"Example12"},
        {email:"example123@snuchennai.edu.in",password:"Example123"},
        {email:"example1234@snuchennai.edu.in",password:"Example1234"},
    ];

    const check=()=>{
        console.log("Name:",name);
        console.log("Email:",email);
        console.log("Password:",password);
        const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;

        if (regex.test(password)){
            console.log("Password is valid");
        }
        else{
            alert("Password is invalid");
        }
        
        const match=credcheck.find(
            (cred)=>cred.email===email && cred.password===password
        );

        if (match){
            return navigate('/nextpage');
        }
        else{
            console.log("Didnot match");
            alert("Invalid Username/Password");
        }

    }



      return(
        <div>
        <Display content="Login Page"/>
        <Input id="name" type="text" label="Name: " value={name} fun={(e)=>setname(e.target.value)}/>
        <br/>
        <Input id="email" type="text" label="Email: " value={email} fun={(e)=>setemail(e.target.value)}/>
        <br/>
        <Input id="password" type="password" label="Password: " value={password} fun={(e)=>setpassword(e.target.value)}/>
        <br/>
        <br/>
        <BootButton content="Login" color="red" fun={check}/>
      </div>
      );
}

export default Login;



