import React, { useState } from 'react';
// import authSvg from '../assests/auth.svg';
import { ToastContainer, toast } from 'react-toastify';
// import { authenticate, isAuth } from '../helpers/auth';
// import axios from 'axios';
// import { Redirect } from 'react-router-dom';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password1: '',
    password2: '',
  });
  const { email, name, password1, password2 } = formData;
  //Handle change from inputs
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  //Submit data to backend
  const hendleSubmit = (e) => {
    e.preventDefault();
    if (name && email && password1) {
      if (password1 === password2) {
      } else {
        toast.error("Passwords don't matches");
      }
    } else {
      toast.error('Please fill all fields');
    }
  };
  return <div>Register Page</div>;
}

export default Register;
