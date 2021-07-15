import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import FormSignin from './FormSignin'
const Form = ({setIsLogged}) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [tabIndex, setTabIndex] = useState(0)
  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        
        
         <FormSignin setIsLogged={setIsLogged} />
        
        {!isSubmitted ? (
          <FormSignup setTabIndex={setTabIndex}/>
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;
