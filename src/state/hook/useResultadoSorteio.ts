import React from 'react'
import { useRecoilValue } from 'recoil'
import { resultadoAmigoSecreto } from '../atom'

const useResultadoSorteio = () => {
  return  useRecoilValue(resultadoAmigoSecreto)
}

export default useResultadoSorteio