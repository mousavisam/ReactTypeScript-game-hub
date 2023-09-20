import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode | ReactNode[];
  term: string;
}

const DefinitionItem = ({ children, term }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color="gray.600">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
