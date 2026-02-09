import { render, screen } from "@testing-library/react";
import React from "react";
import { RecoilRoot } from "recoil";
import CardList from "./CardList";
import { useCardList } from "../../../../state/hook/useCardList";
import { listaParticipantesState } from "../../../../state/atom";

describe('lista vazia de participantes', () => {
    
    test('Deve ser renderizada sem elementos', () => {
        
        render(
            <RecoilRoot>
                <CardList />
            </RecoilRoot>)
        
        const itens = screen.queryAllByRole('listitem')
        expect(itens).toHaveLength(0)
        
    })
 }) 


 describe('lista preenchida de participantes', () => {

    test('Deve ser renderizada com elementos', () => {
        render(
            <RecoilRoot 
                initializeState={({set}) => { 
                    set(listaParticipantesState, ['bernardo', 'joao', 'pedro'])
                }}
                >
                <CardList />
            </RecoilRoot>)
        
        const itens = screen.queryAllByRole('listitem')
        expect(itens.length).toBeGreaterThan(0)
        
    })
 }) 