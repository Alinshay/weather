import React from 'react'

import './styles.css'
import { Title } from './components/title/Title.jsx'

const Main = () => {
  //запрос к апи
  return (
    <div className="wether-wrapper">
      {/* <img src="" /> */}
      <Title title="Moscow, Russia" date="16.06.2023" />
      {/* <Temperature temp="" desc="" />
        <Widgets /> */}
    </div>
  )
}

export default Main
