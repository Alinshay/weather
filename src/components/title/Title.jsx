import React from 'react'
import './styles.css'

export const Title = ({title, date}) => {
  return (
    <div className="title">
        {title}
        <span className="title_date">
          {date}
        </span>
    </div>
  )
}
