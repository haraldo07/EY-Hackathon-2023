import React from 'react';
import Display from './display';
import Bootbutton from './button';
import FormInput from './form';
import {useState} from 'react';
import {useNavigate} from "react-router-dom";


function AppRouter() {
  const [name,setname]=useState('');
  const [email,setemail]=useState('');
  const [password,setpassword]=useState('');
  const navigate = useNavigate();

  const credcheck=[
    {email:"ronaldo@football.in",password:"ronaldo"},
    {email:"zidane@football.in",password:"zidane"},
    {email:"mbappe@football.in",password:"mbappe"},
    {email:"musiala@football.in",password:"musiala"},
  ];


  const handleSubmit=()=>{
    console.log("Name:",name);
    console.log("Email:",email);
    console.log("Password:",password);  

    const match=credcheck.find(
      (cred)=>cred.email===email && cred.password===password
    );
    if (match){
      console.log("Success");
      return navigate('/nextpage');
    } else{
      console.log("Fail");
      alert("Invalid username/password, Try again");
    }
  }
  return (
    <div>
      
      <Display content = "Login"/>
      <FormInput Id="formname" label="Name :" type="text" placeholder="Enter name:" size="10 px"  onChange={(e) => setname(e.target.value)}/>
      <br/>
      <FormInput Id="formemail" label="Email :" type="email" placeholder="Enter email:" size="10 px"  onChange={(e) => setemail(e.target.value)}/>
      <br/>
      <FormInput Id="formpassword" label="Password :" type="password" placeholder="Enter password" size="10 px"  onChange={(e) => setpassword(e.target.value)}/>
      <br/>
      <br/>
      &nbsp;<Bootbutton content = "Login" color="success" fun={handleSubmit}/>
    </div>
      
  );
}

export default AppRouter;
