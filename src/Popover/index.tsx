import React, { Dispatch, HTMLAttributes, SetStateAction } from "react"
import { AnotherPopover } from "../AnotherPopover"

import { Container } from "./styles"

interface Props extends HTMLAttributes<HTMLDivElement> {
  itemId: number | null
  editPopover: boolean
  setEditPopover: Dispatch<SetStateAction<boolean>>
}

const Popover: React.FC<Props> = ({ setEditPopover, editPopover, itemId, ...rest }) => {
  const handleClick = (itemId: number | null) => (e: React.MouseEvent<HTMLDivElement>) => {
    const actionName = e.currentTarget.innerText.toLocaleLowerCase().replace(" ", "-")
    const action = {
      adicionar: () => reset(),
      renomear: () => reset(),
      "adicionar-tags": () => reset(),
      excluir: () => reset(),
    }[actionName]
    if (!action) return
    action()
  }

  const handleEditClick = () => setEditPopover(old => !old)

  function reset() {
    setEditPopover(false)
  }

  return (
    <Container {...rest}>
      <div onClick={handleClick(itemId)}>Adicionar</div>
      <div onClick={() => handleEditClick()}>
        <p>Editar</p>
        <AnotherPopover style={{ display: editPopover ? "block" : "none" }} />
      </div>
      <div onClick={handleClick(itemId)}>Renomear</div>
      <div onClick={handleClick(itemId)}>Adicionar Tags</div>
      <div onClick={handleClick(itemId)}>Excluir</div>
    </Container>
  )
}

export default Popover
