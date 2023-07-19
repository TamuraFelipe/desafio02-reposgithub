import { useState } from 'react';
import {
    Container,

} from './styles';

export const Input = ({id, label, onChange, value, setError, error, ...props}) => {
  
  const handleOnChange = (e) => {
    setError("");
    onChange(e.target.value);
  }

  return (
    <Container>
        <label 
        htmlFor={id}>
          {label}
        </label>
        <input 
        id={id}
        name={id}
        value={value}
        className={ error ? 'border--red' : ""}
        required
        onChange={handleOnChange}
        {...props}
        />
    </Container>
  )
}
