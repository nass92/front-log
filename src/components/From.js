import React, { useState } from 'react';
import './Form.css';
import FormSignup from './FormSignup';

import FormSignin from './FormSignin'
const Form = ({setIsLogged}) => {

  const [tabIndex, setTabIndex] = useState(0)
 
  return (
    <>
      <div className='form-container'>
        
        
         <FormSignin setIsLogged={setIsLogged} />
        
        
          <FormSignup setTabIndex={setTabIndex}/>
       
        
      </div>
    </>
  );
};

export default Form;
