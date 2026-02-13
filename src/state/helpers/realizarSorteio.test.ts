import { realizarSorteio }  from "./realizarSorteio"

 describe('dado sorteio de amigo secreto', () => {
    test('cada participante não sorteio o proprío nome!', () => { 

        const participantes = [
            'Ana',  // 0 index
            'Bernardo', // 1 index
            'Julio', // 2  index
            'João', // 3 index
            'Vinícius', // 4 index
            'Nathalia' // 5 index 
        ]
        
        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante =>  {
            const amigoSecreto =  sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})