import React from 'react';
import validate from '../Hooks/Validate';
import { useForm } from "react-hook-form";
import './Form.css';
import axios from 'axios'
import { useToast } from "@chakra-ui/react"
const FormSignup = ({ setTabIndex}) => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const toast = useToast()
  

  const handleSubmitButton = async (data) => {
    try {
      if (data.password !== data.password2) {
        throw new Error("the passwords are not the same please retry")
      }
console.log(data)
      const response = await axios({
      method: 'post',
      url: 'http://localhost:7777/Register',
      data: {
        username: data.username,
        email: data.email,
        password: data.password
      }
    })

    toast({
      title: 'Registered',
      description: `${response.data}`,
      status: 'success',
      position: "top-right",
      duration: 5000,
      isClosable: true,
    })
    setTabIndex(0)
    
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
      <form onSubmit={handleSubmit(handleSubmitButton)}className='form' noValidate>
        <h1>
          Get started with us today! Create your account by filling out the
          information below.
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
          {errors.username && <p>{errors.username}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Email</label>
          <input
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            isRequired {...register("email")}
          />
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Password</label>
          <input
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            isRequired  {...register("password")}
          />
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className='form-inputs'>
          <label className='form-label'>Confirm Password</label>
          <input
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            isRequired {...register("password2")}
          />
          {errors.password2 && <p>{errors.password2}</p>}
        </div>
        <button className='form-input-btn' type='submit'>
          Sign up
        </button>
      </form>
    </div>
  );
};

export default FormSignup;