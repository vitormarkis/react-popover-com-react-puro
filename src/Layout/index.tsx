import { useState } from "react";
import Article from "../Article";
import { Container } from "./styles";

export const items = [1, 2, 3, 4, 5, 6];

const Layout: React.FC = () => {
  const [popoverOpened, setPopoverOpened] = useState<number | null>(null);

  return (
    <Container>
      {items.map(item => (
        <Article
          key={item}
          itemId={item}
          setPopoverOpened={setPopoverOpened}
          popoverOpened={popoverOpened}
        />
      ))}
    </Container>
  );
};

export default Layout;
