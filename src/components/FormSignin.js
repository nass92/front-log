import React from 'react';

import { useForm } from 'react-hook-form';
import './Form.css';
import { useToast } from "@chakra-ui/react"
import axios from "axios"
const FormSignup = ({ setIsLogged}) => {
    const { register, handleSubmit } = useForm();
    const toast = useToast()
  
    const handleSubmitButton = async (data) => {
      try {
        const response = await axios({
        method: 'post',
        url: 'http://localhost:7777/Log',
        data: {
          username: data.username,
          password: data.password
        }
      });
      if (response.data.logged) {
        setIsLogged(true)
      } else {
        throw new Error(response.data)
      }
      
      } catch (e) {
        toast({
          title: 'Error',
          description: `${e.message}`,
          status: 'error',
          duration: 5000,
          isClosable: true,
        })
      }
    } 

  return (
    <div className='form-content-right'>
      <form onSubmit={handleSubmit(handleSubmitButton)} className='form' noValidate>
        <h1>
          Welcome Back. Sign in to access to your Profile!
        </h1>
        <div className='form-inputs'>
          <label className='form-label'>Username</label>
          <input
            className='form-input'
            type='text'
            name='username'
            placeholder='Enter your username'
            isRequired {...register("username")}
          />
          
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            isRequired {...register("password")}
          />
         
        </div>
        <button className='form-input-btn' type='submit'>
          Sign in
        </button>
        
      </form>
    </div>
  );
};

export default FormSignup;