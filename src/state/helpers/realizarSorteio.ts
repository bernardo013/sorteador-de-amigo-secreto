import shuffle from "just-shuffle"

export function realizarSorteio(participantes: string[]) {
    const totalParticipantes = participantes.length
    const embaralhado = shuffle(participantes)
    const resultado = new Map<string, string>()
                  //5 indíces      e 6 participantes  pois o array começa em [0]
    for(let index = 0; index < totalParticipantes; index++) {
                     // indice 0 inicial  indice 5 o indice maxímo do array 
        const indiceAmigo = index ===     (totalParticipantes - 1) ? 0 : index + 1;
        resultado.set(embaralhado[index], embaralhado[indiceAmigo])
        
    }


    return resultado
}   