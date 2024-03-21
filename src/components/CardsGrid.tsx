import { SimpleGrid } from "@chakra-ui/react";
import PokerCard from "./PokerCard";

function CardsGrid() {
  return (
    <SimpleGrid
      spacing={4}
      templateColumns="repeat(auto-fill, minmax(150px, 1fr))"
    >
      <PokerCard>1</PokerCard>
      <PokerCard>2</PokerCard>
      <PokerCard>3</PokerCard>

    </SimpleGrid>
  );
}

export default CardsGrid;
