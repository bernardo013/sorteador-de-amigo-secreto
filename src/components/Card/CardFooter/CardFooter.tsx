import { useNavigate } from "react-router-dom";
import style from './CardFooter.module.scss'
import { useListaParticipantes } from '../../../state/hook/useListaParticipantes';
import sacolas from '../../../assets/img/sacolas.png'   
import { ReactNode } from "react";



const CardFooter = () => {
  const participantes = useListaParticipantes()
  const navigate = useNavigate()

  const iniciar = () => {
    navigate('/sorteio')
  }

  return (
    <footer className={style.footerPrincipal}>
      <button className={style.footerBtn} disabled={participantes.length < 3} onClick={iniciar}>Iniciar a brincadeira!</button>
      <img src={sacolas} alt="Sacolas" />
    </footer>
  );
};

export default CardFooter;

