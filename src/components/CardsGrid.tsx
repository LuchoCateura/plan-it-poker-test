import { Grid } from "@chakra-ui/react";
import PokerCard from "./PokerCard";

function CardsGrid() {
  const cardValues = ['0','1','2','3','5','8','13','21','34','55','89','?','Coffee'];

  return (
    <Grid templateColumns="repeat(4, 150px)" gap="20px">
      {cardValues.map((card) => {
        return (
            <PokerCard key={card}>{card}</PokerCard>
        );
      })}
    </Grid>
  );
}
export default CardsGrid;
