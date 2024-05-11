import React,{useState} from "react";
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';
import './signup.css';
import { ToastContainer,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

function Signup(){
    const [name,setName] = useState('');
    const [phone,setPhone] = useState('');
    const [email,setEmail] = useState('');
    const [pass,setPass] =useState('');
    const [role,setRole] =useState('');
    const [dept,setDept] =useState('');

  const navigate = useNavigate();

    const handleSubmit = (e) => {
        
        e.preventDefault();

        if (!name || !email || !pass )
        {
          toast('Please enter all the fields');
          return;
        }
    
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) 
        {
          toast("Enter valid mail");
          return;
        }
    
        const article = {
          name: name,
          email: email,
          phone_num: phone,
          password: pass,
          department:dept,
          role:role
        };
    
        axios.post('http://localhost:8080/phone_num/', article)
          .then((response)=>{
            toast('Registered successfully');
            navigate('/home')
          })

          .catch(function (error) {
            console.error(error);
          });
      };

    return (
        <>
        <div id="form">

      <form>

        <h2>Sign Up </h2>
        <br/>

        <TextField label="Name" id="outlined-size-normal" value={name} name="name" onChange={e => setName(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="Role" id="outlined-size-normal" value={role} name="password" onChange={e => setRole(e.target.value)}  fullWidth />
        <br/><br/>
        <TextField label="Email" id="outlined-size-normal" value={email} name="email" onChange={e => setEmail(e.target.value)} fullWidth/>
        <br/><br/>
        <TextField label="Password" id="outlined-size-normal" value={pass} name="password" onChange={e => setPass(e.target.value)} fullWidth />
        <br/><br/>
        <TextField label="Department" id="outlined-size-normal" value={dept} name="password" onChange={e => setDept(e.target.value)}  fullWidth />
        <br/><br/>
        <TextField label="Phone" id="outlined-size-normal" value={phone} name="phone" onChange={e => setPhone(e.target.value)} fullWidth/>
        <br/><br/>
        
        <Button variant="contained" color="success" type="submit" onClick={handleSubmit}>SIGN UP</Button>
      </form>
    </div>


        <ToastContainer/>
        </>
    )
}

export default Signup;
