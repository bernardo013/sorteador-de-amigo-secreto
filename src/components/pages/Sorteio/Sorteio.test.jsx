import React from "react";
import { RecoilRoot } from "recoil";
import Sorteio from './Sorteio'
import { render, screen } from "@testing-library/react";
import { listaParticipantesState } from "../../../state/atom";



describe('a pagina de sorteio', () => {
    test('todos os participantes podem exibir o seu amigo secreto', () => {
        const participantes = ['bernardo', 'pedro', 'julia']
        
        render(
            <RecoilRoot  initializeState={({ set }) => {
                set(listaParticipantesState, participantes)
            }}>
                <Sorteio />
            </RecoilRoot>
        )
        const opcoes = screen.queryAllByRole('option')
        expect(opcoes).toHaveLength(participantes.length)

})
})