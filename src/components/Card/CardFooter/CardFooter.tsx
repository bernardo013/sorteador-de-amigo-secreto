import { useNavigate } from "react-router-dom";
import style from './CardFooter.module.scss'
import { useListaParticipantes } from '../../../state/hook/useListaParticipantes';
import sacolas from '../../../assets/img/sacolas.png'   
import { ReactNode } from "react";
import { useSorteador } from "../../../state/hook/useSorteador";



const CardFooter = () => {
  const participantes = useListaParticipantes()
  const navigate = useNavigate()

  const sortear = useSorteador()

  const iniciar = () => {
    sortear()
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

