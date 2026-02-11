import { useCardList } from "../../../state/hook/useCardList";
import style from './CardList.module.scss'

const CardList = () => {

  const participantes: string[] = useCardList()

  return (
    <ul className={style.listContainer}>
      {participantes.map(participante =>
        <li key={participante}>
          {participante}
        </li>
      )}
    </ul>
  );
};

export default CardList;

