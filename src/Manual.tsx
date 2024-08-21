import React from "react";
import {
  Box,
  Container,
  Heading,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { IManual } from "./types";
import { ManualSection } from "./ManualSection";

interface ManualProps {
  manualData: IManual;
}

export const Manual: React.FC<ManualProps> = ({ manualData }) => {
  const bgColor = useColorModeValue("gray.50", "gray.900");

  return (
    <Box bg={bgColor} minHeight="100vh" py={10}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="stretch">
          <Heading as="h1" size="xl" textAlign="center" color="blue.700" mb={6}>
            {manualData.title}
          </Heading>
          {manualData.sections.map((section, index) => (
            <ManualSection key={index} section={section} />
          ))}
        </VStack>
      </Container>
    </Box>
  );
};
