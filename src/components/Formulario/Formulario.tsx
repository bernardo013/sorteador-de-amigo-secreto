import React from 'react';
import Header from './Header/header';

const Formulario = () => {
    return (
        <form>
        <Header />
            <input
                type="text"
                placeholder="Insira os nomes dos participantes!"
            />
            <button disabled>Adicionar</button>
        </form>
    );
};

export default Formulario;