import React from "react";
import { RecoilRoot } from "recoil";
import CardFooter from "./CardFooter";
import { fireEvent, render, screen } from "@testing-library/react";
import { listaParticipantesState } from "../../../../state/atom";
import { useNavigate } from "react-router-dom";


const mockNavegacao = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavegacao
    }
})


describe('onde não existem participantes suficientes', () => {
    test('a brincadeira não pode ser iniciada', () => {

        render(
            <RecoilRoot
                initializeState={({ set }) => {
                    set(listaParticipantesState, [])
                }}>
                <CardFooter />
            </RecoilRoot>
        )
        const botao = screen.getByRole('button')
        expect(botao).toBeDisabled()

    })

})


describe('quando existem participantes suficientes', () => {
    const participantes = ['bernardo', 'joao', 'pedro']

    beforeEach(() => {
        render(
            <RecoilRoot
                initializeState={({ set }) => set(listaParticipantesState, participantes)}
            >
                <CardFooter />
            </RecoilRoot>
        )
    })

    test('a brincadeira pode ser iniciada', () => {
        const botao = screen.getByRole('button')
        expect(botao).not.toBeDisabled()
    })

    test('a brincadeira foi iniciada', () => {
        const botao = screen.getByRole('button')
        fireEvent.click(botao)
        expect(mockNavegacao).toHaveBeenCalledTimes(1)
        expect(mockNavegacao).toHaveBeenCalledWith('/sorteio')
    })
})
