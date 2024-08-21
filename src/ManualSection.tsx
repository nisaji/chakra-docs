import React from "react";
import {
  Box,
  Heading,
  Text,
  Image,
  UnorderedList,
  OrderedList,
  ListItem,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { IManualSection, IManualContent } from "./types";

interface ManualSectionProps {
  section: IManualSection;
  level?: number;
}

const renderContent = (content: IManualContent) => {
  switch (content.type) {
    case "paragraph":
      return <Text mb={4}>{content.content as string}</Text>;
    case "image":
      return (
        <Image
          src={content.imageSrc}
          alt={content.imageAlt}
          width={content.imageWidth}
          height={content.imageHeight}
          mb={4}
        />
      );
    case "list":
      const ListComponent =
        content.listType === "ordered" ? OrderedList : UnorderedList;
      return (
        <ListComponent mb={4}>
          {(content.content as string[]).map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ListComponent>
      );
    default:
      return null;
  }
};

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
  const headingColor = useColorModeValue(
    `blue.${700 - level * 100}`,
    `blue.${300 + level * 100}`
  );

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
      {section.content.map((contentItem, index) => (
        <React.Fragment key={index}>
          {renderContent(contentItem)}
        </React.Fragment>
      ))}
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
