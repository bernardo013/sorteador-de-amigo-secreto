import React from 'react'
import Logo from '../../../assets/img/logo.png'
import Participantes from '../../../assets/img/participante.png'
import style from './header.module.scss'

const Header = () => {
    return (
        <header className={style.Header}>
            <img className={style.img1} src={Logo} alt="Logo" />
            <img className={style.img2} src={Participantes} alt='participantes' />
        </header>
    )
}

export default Header