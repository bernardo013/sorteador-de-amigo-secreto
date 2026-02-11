import { ReactNode } from "react"
import style from "./Card.module.scss"

interface CardProps {
  children: ReactNode
}

const Card = ({ children }: CardProps) => {
  return (
    <section className={style.card}>
      {children}
    </section>
  )
}

export default Card
