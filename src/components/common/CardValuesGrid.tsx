import { Checkbox, Grid, GridItem } from "@chakra-ui/react";

function CardValuesGrid() {
    const cardValues = ['0','1','2','3','5','8','13','21','34','55','89','?','Coffee'];

    return(
        <Grid templateColumns='repeat(5, 1fr)' gap={5} alignContent="center">
            {cardValues.map((card)=>{
                return (
                <GridItem h='30px'>
                    <Checkbox>{card}</Checkbox>
                </GridItem>) })}
        </Grid>
    )
}

export default CardValuesGrid