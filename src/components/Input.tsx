import React, { InputHTMLAttributes } from 'react';


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string
  id: string
}

export const Input: React.FC<InputProps> = ({ placeholder, id, ...props}) => {
  const { required } = props

  return (
    <div className='input-container'>
      <label htmlFor={id} className='input-placeholder'>{required ? `${placeholder} *` : placeholder}</label>
      <input id={id} className='input-input' {...props}></input>
    </div>
  )
}