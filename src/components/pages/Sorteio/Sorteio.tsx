import React, { useState } from 'react'
import { useListaParticipantes } from '../../../state/hook/useListaParticipantes'
import Header from '../../Header/Header'
import style from './Sorteio.module.scss'
import useResultadoSorteio from '../../../state/hook/useResultadoSorteio'


const Sorteio = () => {
  const participantes = useListaParticipantes()
  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')
  
  const resultado = useResultadoSorteio()


  const sortear = (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault()
          if(resultado.has(participanteDaVez)) {
            setAmigoSecreto(resultado.get(participanteDaVez)!)
          }
  }
  return (
    <> 
  <Header />
  <form onSubmit={sortear}>
    <section className={style.card}>
      <select
       className={style.select}
       required
       name='ParticipanteDaVez'
       id='ParticipanteDaVez'
       placeholder='selecione o seu nome'
       value={participanteDaVez}
       onChange={event => setParticipanteDaVez(event.target.value)}

      >
          {participantes.map(participante => (
            <option  
            className={style.option}
             key={participante}>
              {participante}
            </option>
          ))}
    </select>
      <button className={style.button}>Sortear</button>
  </section>
</form>
      {amigoSecreto && <p  className={style.resultado} role='alert'>{amigoSecreto}</p>}
  </>
  )
}

export default Sorteio