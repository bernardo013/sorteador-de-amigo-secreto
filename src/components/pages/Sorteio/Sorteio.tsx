import React, { useState } from 'react'
import { useListaParticipantes } from '../../../state/hook/useListaParticipantes'
import Header from '../../Header/Header'
import style from './Sorteio.module.scss'
import useResultadoSorteio from '../../../state/hook/useResultadoSorteio'
import aviao from '../../../assets/img/aviao.png'
import cassino from '../../../assets/img/casino.svg'


const Sorteio = () => {
  const participantes = useListaParticipantes()
  const [participanteDaVez, setParticipanteDaVez] = useState('')
  const [amigoSecreto, setAmigoSecreto] = useState('')

  const resultado = useResultadoSorteio()


  const sortear = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (resultado.has(participanteDaVez)) {
      setAmigoSecreto(resultado.get(participanteDaVez)!)
    }
  }
  return (
    <>
      <Header />
      <form onSubmit={sortear}>
        <section className={style.card}>
          <div className={style.container}>
            <h1 className={style.titulo}>Quem vai tirar o papelzinho!</h1>
            <select
              className={style.seletor}
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

            {amigoSecreto && <p className={style.resultado} role='alert'>{amigoSecreto}</p>}
            <p className={style.pTag}>Clique em em sortear para ver quem é seu amigo secreto!</p>

            <button className={style.btnSortear}>

              <img src={cassino}/>
              Sortear!</button>
            <img src={aviao} />

          </div>
        </section>
      </form>
    </>
  )
}

export default Sorteio