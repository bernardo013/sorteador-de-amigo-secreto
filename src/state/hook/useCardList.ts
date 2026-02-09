import { useRecoilValue } from "recoil"
import { listaParticipantesState } from "../atom"

export const useCardList = () => {
    return useRecoilValue(listaParticipantesState)
}