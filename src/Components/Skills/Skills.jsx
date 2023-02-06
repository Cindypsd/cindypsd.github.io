import { useState } from 'react'
import { VentanaModal } from '../VentanaModal/VentanaModal'
import style from './Skills.module.css'

export const Skills = () => {

  const [selected, setSelected] = useState('')



  return (
    <div className={style.skillContainer}>
      {/* <VentanaModal selected={selected}/>  */}

      <img onMouseEnter={(event)=>setSelected(event.target.name)} className={style.skillImg} src={require('../../images/hojaSoft.png')} alt="English Skills"  name="soft"/>
      <img  onMouseEnter={(event)=>setSelected(event.target.name)} className={style.skillImg}src={require('../../images/hojaTech.png')} alt="English Skills" name="tech"/>
      <img onMouseEnter={(event)=>setSelected(event.target.name)} className={style.skillImg}src={require('../../images/englishLetrero.png')} alt="English Skills" name="english"/>
    </div>
  )
}
