import React from 'react';

interface SuccessPageProps {
  email: string
}

export const Success: React.FC<SuccessPageProps> = ({ email }) => {
  return (
  <div className='success-container'>
    <div> Hello: {email} </div>
    <div> You have successfully logged in. </div>
  </div>
  )
}