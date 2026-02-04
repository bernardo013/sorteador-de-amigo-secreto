import React, { useRef, useState } from 'react';
import Header from './Header/header';

const Formulario = () => {
    
    const [nome, setNome] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const adicionarParticipante = (event: React.FormEvent<HTMLFormElement>) => { 
        event.preventDefault()
    }

    return (
        <form onSubmit={adicionarParticipante}>
        <Header />
            <input
                value={nome}
                onChange={event => setNome(event.target.value)}
                type="text"
                placeholder="Insira os nomes dos participantes!"
            />
            <button disabled={!nome}>Adicionar</button>
        </form>
    );
};

export default Formulario;