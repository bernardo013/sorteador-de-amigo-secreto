import React from "react";
import { RecoilRoot } from "recoil";
import Sorteio from './Sorteio'
import { fireEvent, render, screen } from "@testing-library/react";
import { listaParticipantesState, resultadoAmigoSecreto } from "../../../state/atom";
import useResultadoSorteio from "../../../state/hook/useResultadoSorteio";



describe('na pagina de sorteio', () => {
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
    test('o amigo secreto é exibido quando solicitado', () => {
        const participantes = ['bernardo', 'pedro', 'julia']
        const resultado = new Map([
            ['bernardo', 'pedro'],
            ['pedro', 'julia'],
            ['julia', 'bernardo']
        ])


         render(
            <RecoilRoot initializeState={ ({set}) => {
                set(resultadoAmigoSecreto, resultado)
                set(listaParticipantesState, participantes)
            } }>
                <Sorteio/>
            </RecoilRoot>
        )
            const select = screen.getByPlaceholderText('selecione o seu nome')
            fireEvent.change(select, {
                target: {
                    value: participantes[0]
                }
            })
            const botao = screen.getByRole('button')
            fireEvent.click(botao)

            const amigoSecreto = screen.getByRole('alert')
            expect(amigoSecreto).toBeInTheDocument()
    })
})