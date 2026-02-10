import { ReactNode, useRef, useState } from "react"
import { useMensagemDeErro } from "../../../../state/hook/useMensagemDeErro"
import { useAdicionarParticipante } from "../../../../state/hook/useAdicionarParticipante"
import style from './CardForm.module.scss'

interface CardFormProps {
    children?: ReactNode
}

const CardForm = ( { children }: CardFormProps ) => {

const [nome, setNome] = useState('')

const inputRef = useRef<HTMLInputElement>(null)

const adicionarNaLista = useAdicionarParticipante()

const mensagemDeErro = useMensagemDeErro()

const adicionarParticipante = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    adicionarNaLista(nome)
    setNome('')
    inputRef.current?.focus()
}

return (
    <>
        <div className={style.container}>
            <form onSubmit={adicionarParticipante}>
                <div className={style.grupoInput}>
                    <h1 className={style.h1}>Vamos Começar!</h1>

                    <input
                        className={style.inputText}
                        ref={inputRef}
                        value={nome}
                        onChange={evento => setNome(evento.target.value)}
                        type="text"
                        placeholder="Insira os nomes dos participantes"
                    />
                    <button  className={style.btnInput} disabled={!nome}>Adicionar</button>
                </div>
                {mensagemDeErro && <p className="alerta erro" role="alert">{mensagemDeErro}</p>}
            </form>
            {children}
        </div>
    </>
)
}

export default CardForm 