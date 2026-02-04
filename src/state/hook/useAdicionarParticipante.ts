import React from 'react'
import { useSetRecoilState } from 'recoil'
import { listaParticipantesState } from '../atom'

const useAdicionarparticipante = () => {
    const setLista = useSetRecoilState(listaParticipantesState)
    return(nomeParticipante: string) => {
        return setLista(listaAtual => [...listaAtual, nomeParticipante])
    }
}

export default useAdicionarparticipante