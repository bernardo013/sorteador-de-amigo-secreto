import { useListaParticipantes } from "../../../../state/hook/useListaParticipantes";
import { useNavigate } from "react-router-dom";
import style from './CardFooter.module.scss'

const CardFooter = () => {
  const participantes = useListaParticipantes()
  const navigate = useNavigate()

  const iniciar = () => {
    navigate('/sorteio')
  }
  
  return (
    <footer>
        <button className={style.test} disabled={participantes.length < 3} onClick={iniciar}>Iniciar a brincadeira!</button>
    </footer>
  );
};

export default CardFooter;

