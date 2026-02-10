import { useCardList } from "../../../../state/hook/useCardList";
import style from './CardList.module.scss'

const CardList = () => {
  
  const participantes:string[] = useCardList()
  
  return (
  <ul>
      {participantes.map(participante =>  
        <li className={style.liSon} key={participante}>
          {participante}
        </li>
      )}
  </ul>
  );
};

export default CardList;

