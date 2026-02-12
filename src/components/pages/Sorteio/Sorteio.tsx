import React from 'react'
import { useListaParticipantes } from '../../../state/hook/useListaParticipantes'
import Header from '../../Header/Header'
import style from './Sorteio.module.scss'


const Sorteio = () => {
  const participantes = useListaParticipantes()
  return (
    <> 
  <Header />
    <section className={style.card}>
      <select name='ParticipanteDaVez' id='ParticipanteDaVez'>
          {participantes.map(participante => (
            <option key={participante}>
              {participante}
            </option>
          ))}
    </select>
  </section>
          

  </>
  )
}

export default Sorteio