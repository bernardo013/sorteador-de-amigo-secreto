import Header from "../Header/Header"
import CardForm from "../Card/CardForm/CardForm"
import CardList from "../Card/CardList/CardList"
import CardFooter from "../Card/CardFooter/CardFooter"
import Card from "../Card/Card"

const PaginaPrincipal = () => {
  return (
    <>
    <Header />
      <Card>
        <CardForm />
        <CardList />
        <CardFooter />
      </Card>

    </>
  )
}

export default PaginaPrincipal