import React, { Dispatch, HTMLAttributes, SetStateAction, useEffect, useState } from "react"
import Popover from "../Popover"

interface Props extends HTMLAttributes<HTMLDivElement> {
  itemId: number | null
  popoverOpened: number | null
  setPopoverOpened: Dispatch<SetStateAction<number | null>>
}

import { ClickModal, Container } from "./styles"

// export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
//   editPopover: boolean
//   setEditPopover: Dispatch<SetStateAction<boolean>>
// }

const Article: React.FC<Props> = ({ setPopoverOpened, itemId, popoverOpened }) => {
  const check = () => ({ display: popoverOpened === itemId ? "block" : "none" })
  const [editPopover, setEditPopover] = useState<boolean>(false)
  
  return (
    <>
      <ClickModal
        style={check()}
        onClick={() => {
          setPopoverOpened(null)
          setEditPopover(false)
        }}
      />
      <Container>
        <p onClick={() => setPopoverOpened(actualValue => (actualValue === itemId ? null : itemId))}>Item 1</p>
        <Popover
          editPopover={editPopover}
          setEditPopover={setEditPopover}
          style={check()}
          itemId={itemId}
        />
      </Container>
    </>
  )
}

export default Article
