import React, { InputHTMLAttributes, useState } from 'react'
import { ReactComponent as CheckedIcon } from '../icons/checkmark-checked.svg'
import { ReactComponent as UncheckedIcon } from '../icons/checkmark-unchecked.svg'


interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  id: string
}

export const Checkbox: React.FC<InputProps> = ({ label, id, ...props}) => {
  const [checked, setChecked] = useState(false) 
  return (
    <label className='checkbox-container' htmlFor={id}>
      <div className='checkbox-mark-container'>
        <input id={id} type='checkbox' className='checkbox-hidden-input' {...props} onChange={(event) => {setChecked(event.target.checked); props.onChange?.(event)}}></input>
        {
          checked
            ? <CheckedIcon fill="#1976d2" className='icon'/>
            : <UncheckedIcon fill='rgba(0,0,0,0.6)' className='icon'/>
        }
      </div>
      <div  className='checkbox-label'>{label}</div>
    </label>
  )
}