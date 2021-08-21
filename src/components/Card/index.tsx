import React from 'react'
import './styles.scss'

interface CardProps {
  icon: string,
  children: any,
}

const Card: React.FC<CardProps> = ({ icon, children }) => {
  return (
    <div className="card">
      <img src={icon} />
      <p>
        {children}
      </p>
    </div>
  )
}

export default Card