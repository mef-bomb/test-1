import React, { ButtonHTMLAttributes } from 'react';


interface InputProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button: React.FC<InputProps> = ({ children, ...props}) => {
  return (
    <button className='button-button' {...props}>
      {children}
    </button>
  )
}