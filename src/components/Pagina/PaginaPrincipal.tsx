import Header from "./Header/Header"
import CardForm from "./Card/CardForm/CardForm"
import CardList from "./Card/CardList/CardList"
import CardFooter from "./Card/CardFooter/CardFooter"

const PaginaPrincipal = () => {
    return (
    <>
        <Header />
        <CardForm>
          <CardList />
          <CardFooter />
        </CardForm>

  </>
  )
}

export default PaginaPrincipal