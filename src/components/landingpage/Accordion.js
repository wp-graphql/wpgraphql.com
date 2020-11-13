import React from "react";
import {
  Box,
  Heading,
  Accordion as ChakraAccordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/core";

const Accordion = ({ title, items }) => {
  return(
    <Box mb={50}>
      <Heading as="h2" mb={30}>{title}</Heading>
      <Box mb={50} px={100}>
        <ChakraAccordion allowToggle>
          {items.map(item => (
            <AccordionItem>
              <AccordionButton>
                <Box flex="1" textAlign="left" fontSize={'2xl'}>
                  {item.title}
                </Box>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} textAlign="left">
                {item.content}
              </AccordionPanel>
            </AccordionItem>
          ))}
        </ChakraAccordion>
      </Box>
    </Box>
  )
}

export default Accordion;
