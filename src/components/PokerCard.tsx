import { Card, CardBody, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PokerCardProps {
  children: ReactNode;
}

function PokerCard({children}:PokerCardProps) {
  return (
    <Card size="sm" borderWidth="1px">
      <Text p="5px">{children}</Text>
      <CardBody>
        <Card borderWidth="1px">
          <CardBody py="60px">
            <Text align={"center"}>{children}</Text>
          </CardBody>
        </Card>
      </CardBody>
      <Text p="5px" align={"end"}>{children}</Text>
    </Card>
  );
}

export default PokerCard;
