import { ReactNode, useRef, useState } from "react"
import { useMensagemDeErro } from "../../../state/hook/useMensagemDeErro"
import { useAdicionarParticipante } from "../../../state/hook/useAdicionarParticipante"
import style from './CardForm.module.scss'
import personAdd from '../../../assets/img/person_add.png'


const CardForm = () => {

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
            <form onSubmit={adicionarParticipante}>
                <div className={style.grupoInput}>
                    <h1 className={style.h1}>Vamos Começar!</h1>

                    {/* NOVO CONTAINER */}
                    <div className={style.linhaInputBotao}>
                        <div className={style.inputWrapper}>
                            <img src={personAdd} alt="" className={style.inputIcon} />

                            <input
                                ref={inputRef}
                                value={nome}
                                onChange={evento => setNome(evento.target.value)}
                                type="text"
                                placeholder="Insira os nomes dos participantes"
                                className={style.inputText}
                            />
                        </div>

                        <button className={style.btnInput} disabled={!nome}>
                            Adicionar
                        </button>
                    </div>
                </div>

                {mensagemDeErro && (
                    <p className={style.alerta} role="alert">{mensagemDeErro}</p>
                )}
            </form>


        </>
    )
}

export default CardForm 