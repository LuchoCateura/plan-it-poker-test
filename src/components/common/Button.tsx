import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  clickHandler?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function Button({ children, clickHandler }: ButtonProps) {
  return (
    <Box
      as="button"
      bg="blue"
      w="100%"
      p={4}
      color="white"
      borderRadius="10px"
      onClick={clickHandler}
    >
      {children}
    </Box>
  );
}

export default Button;
