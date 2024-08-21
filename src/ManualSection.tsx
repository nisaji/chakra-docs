import React from "react";
import {
  Box,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { IManualSection } from "./types";
import theme from "./styles/theme";

interface ManualSectionProps {
  section: IManualSection;
  level?: number;
}

export const ManualSection: React.FC<ManualSectionProps> = ({
  section,
  level = 1,
}) => {
  const getHeadingSize = (level: number) => {
    switch (level) {
      case 1:
        return "lg";
      case 2:
        return "md";
      case 3:
        return "sm";
      default:
        return "xs";
    }
  };

  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.600");
  const headingColor =
    level <= 2
      ? theme.colors.blue[700]
      : useColorModeValue(
          `blue.${600 + level * 100}`,
          `blue.${300 + level * 100}`
        );

  const contentWithStyledLists = section.content
    .replace(
      /<ul>/g,
      '<ul style="list-style-type: disc; padding-left: 1.5em; margin-bottom: 1em;">'
    )
    .replace(
      /<ol>/g,
      '<ol style="list-style-type: decimal; padding-left: 1.5em; margin-bottom: 1em;">'
    )
    .replace(/<li>/g, '<li style="margin-bottom: 0.5em;">');

  return (
    <Box
      bg={bgColor}
      borderRadius="md"
      boxShadow="md"
      p={6}
      mb={4}
      borderWidth={1}
      borderColor={borderColor}
    >
      <Heading
        as={`h${level}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6"}
        size={getHeadingSize(level)}
        mb={4}
        color={headingColor}
      >
        {section.title}
      </Heading>
      <Box
        mb={6}
        fontSize="md"
        lineHeight="tall"
        dangerouslySetInnerHTML={{ __html: contentWithStyledLists }}
        sx={{
          "ul, ol": {
            paddingLeft: "1.5em",
            marginBottom: "1em",
          },
          ul: {
            listStyleType: "disc",
          },
          ol: {
            listStyleType: "decimal",
          },
          li: {
            marginBottom: "0.5em",
          },
        }}
      />
      {section.subsections && section.subsections.length > 0 && (
        <Accordion allowMultiple>
          {section.subsections.map((subsection, index) => (
            <AccordionItem key={index} border="none" mb={2}>
              <AccordionButton
                bg={useColorModeValue("gray.100", "gray.700")}
                _hover={{ bg: useColorModeValue("gray.200", "gray.600") }}
                borderRadius="md"
              >
                <Box flex="1" textAlign="left">
                  <Heading
                    as={`h${level + 1}` as "h2" | "h3" | "h4" | "h5" | "h6"}
                    size={getHeadingSize(level + 1)}
                    color={headingColor}
                  >
                    {subsection.title}
                  </Heading>
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} pt={4}>
                <ManualSection section={subsection} level={level + 1} />
              </AccordionPanel>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </Box>
  );
};
