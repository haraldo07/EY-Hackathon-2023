import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Bootbutton from './buttons';
import FormInput from './forminput';
import Display from './display';

function Index() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const credentialsList = [
    { email: 'example1@example.com', password: 'Password1' },
    { email: 'example2@example.com', password: 'password2' },
  ];

  const handleLoginClick = () => {

    const passwordregex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/;
    if(!passwordregex.test(password)){
        alert("Password should be at least 8 characters long, containing at least one uppercase letter, one lowercase letter, one number");
        return false;
    }

    const matchingCredentials = credentialsList.find(
      (credentials) => credentials.email === email && credentials.password === password
    );
    if (matchingCredentials){
      setMessage('Login successful');
      return navigate('/redirect');
    }
    else{
      setMessage('Login Failed. Invalid Credentials');
      return false;
    }      
    
  };

  return (
    <div>
        <Display content = "Login"/>
        <br/><br/>
        <FormInput Id="formname" label="Name :" type="name" placeholder="Enter your name" />
        <br/>
        <FormInput Id="formemail" label="Email :" type="email" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <br/>
        <FormInput Id="formpass" label="Password :" type="password" placeholder="Enter password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <br/>
        &nbsp;<Bootbutton content = "Login" color="warning" fun={handleLoginClick} />
        <Display content = {message}/>
      </div>
  );
}

export default Index;
