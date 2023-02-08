import { HTMLAttributes } from "react"
import { Container } from "./styles"

interface Props extends HTMLAttributes<HTMLDivElement> {}

export const AnotherPopover: React.FC<Props> = ({ ...rest }) => {
  return (
    <Container {...rest} >
      <div>Nome</div>
      <div>Idade</div>
      <div>E-mail</div>
      <div>Cidade</div>
    </Container>
  )
}
