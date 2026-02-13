import React from "react";
import { RecoilRoot } from "recoil";
import Sorteio from './Sorteio'
import { fireEvent, render, screen } from "@testing-library/react";
import { listaParticipantesState } from "../../../state/atom";
import useResultadoSorteio from "../../../state/hook/useResultadoSorteio";



describe('na pagina de sorteio', () => {
    test('todos os participantes podem exibir o seu amigo secreto', () => {
        const participantes = ['bernardo', 'pedro', 'julia']
        const resultado = new Map([
            ['bernardo', 'pedro']
            ['julia', 'bernardo']
            ['pedro', 'julia']
        ])
        
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
        render(
            <RecoilRoot initializeState={ ({ set }) => {
                set(useResultadoSorteio, resultado)
            }}>
                <Sorteio/>
            </RecoilRoot>

        )
            const select = screen.getByPlaceholderText('selecione o seu nome').ATTRIBUTE_NODE
            fireEvent.change(select, {
                target: {
                    value: participantes
                }
            })
            const botao = screen.getByRole('button')
            fireEvent.click(botao)

            const amigoSecreto = screen.getByRole('alert')
            expect(amigoSecreto).toBeInTheDocument()
    })
})