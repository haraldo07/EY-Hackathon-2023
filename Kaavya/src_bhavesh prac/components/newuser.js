import BootButton from './button';
import Input from './input';
import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Display from './display';
import {credcheck,Push}  from './data';
import { useNavigate } from 'react-router-dom';

function Newuser(){
    const[email,setemail]=useState();
    const[password,setpassword]=useState();
    const navigate=useNavigate();

    console.log(credcheck);
    
    
    const submit=()=>{
        
        const regex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
        console.log('Emailid:',email);
        console.log('Password:',password);
        const ml=credcheck
        if (regex.test(password)){
            console.log('Valid');
        }else{
            alert("Invalid");
        }
        const match=ml.find(
            (c)=>c.email===email
        );
        if (match){
            alert("User registered");
        }
        else{
            Push({email:email,password:password});
            console.log(ml);
            return navigate('/');
        }
        
    }


    return(
    <div>
        <Display content='Registration Page'/>
        <br/>
        <Container className='con'>
            <Input id='email' type='text' value={email} label='Email:'  fun={(e)=>setemail(e.target.value)}/>
            <br/>
            <Input id='password' type='password' value={password} label='Password:'  fun={(e)=>setpassword(e.target.value)}/>
            <br/>
            <BootButton content='Signup' color='green' fun={submit}/>
            <br/>
        </Container>
        
    </div>

)
}

export default Newuser;
