import React, { ButtonHTMLAttributes } from 'react'
import './styles.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  rounded?: boolean,
}

const Button: React.FC<ButtonProps> = ({ rounded, children, ...rest }) => {
  return (
    <button {...rest}  className={rounded ? 'rounded' : ''}>
        {children}
    </button>
  )
}

export default Button