import { SetStateAction } from "react"
import * as S from "./styled"

interface Props {
    setTyping: React.Dispatch<SetStateAction<string>>
}

export default function Search({setTyping}: Props) {

    return (
        <S.Search data-testid='box-search'>
            <S.Input onChange={(e)=> setTyping(e.target.value)} placeholder="Buscar por nome"/>
        </S.Search>
    )
}