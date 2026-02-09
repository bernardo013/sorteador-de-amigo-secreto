import { useCardList } from "../../../../state/hook/useCardList";

const CardList = () => {
  
  const participantes:string[] = useCardList()
  return (
  <ul>
      {participantes.map(participante =>  
        <li key={participante}>
          {participante}
        </li>
      )}
  </ul>
  );
};

export default CardList;

