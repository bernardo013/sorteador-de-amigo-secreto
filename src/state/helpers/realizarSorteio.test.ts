import { realizarSorteio } from "./realizarSorteio"


describe('dado sorteio de amigo secreto', () => {
    test('cada participante não sorteio o proprío nome!', () => {

        const participantes = [
            'Ana', 
            'Bernardo',
            'Julio',
            'João',
            'Vinícius',
            'Nathalia'
        ]
        
        const sorteio = realizarSorteio(participantes)
        participantes.forEach(participante =>  {
            const amigoSecreto =  sorteio.get(participante)
            expect(amigoSecreto).not.toEqual(participante)
        })
    })
})