import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Formulario from './Formulario'


test('Quando o input está vazio, novos participantes não podem ser adicionados', () => {

    render(<Formulario />)

    //Encontrar no DOM o input
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes!")

    //Encontrar o botão
    const botao = screen.getByRole("button")

    //garantir que o input esteja no documento
    expect(input).toBeInTheDocument()
    //garantir que o botão esteja desabilitado
    expect(botao).toBeDisabled()
}) 

test('adicionar participante caso exita um nome preenchido!', () => {
    render(<Formulario />)
    //  encontrar o input 
    const input = screen.getByPlaceholderText("Insira os nomes dos participantes!")
    //  encontrar o botão
    const botao = screen.getByRole("button")

    //  inserir um valor no input
    fireEvent.change(input, {
        target: {
            value: 'bernardo'
        }
    })

    //  clicar no botão de submit 
    fireEvent.click(botao)

    //  garantir que o input esteja com o foco aitvo 
        expect(input).toHaveFocus()
    //  garantir que o input não tenha um valor
        expect(input).toHaveValue("")
})