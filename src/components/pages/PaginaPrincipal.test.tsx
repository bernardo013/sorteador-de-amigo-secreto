import { render } from "@testing-library/react"
import { RecoilRoot } from "recoil"
import PaginaPrincipal from "./PaginaPrincipal"
import { useNavigate } from "react-router-dom"


const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => {
    return {
        useNavigate: () => mockNavigate 
    }
})

describe('a pagina de config', () => {

    test('deve ser renrizada corretamente', () => {
        const { container } = render(
            <RecoilRoot>
                <PaginaPrincipal />
            </RecoilRoot>
        )
        expect(container).toMatchSnapshot()
    })
})