import React from 'react';
import './App.css';
import Form from './components/From'
import {useState} from 'react'
function App() {
  const [isLogged, setIsLogged] = useState("false")
  return <Form setIsLogged={setIsLogged} />;
}

export default App;

