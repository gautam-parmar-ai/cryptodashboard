import React from "react";
import { Card as ChakraCard } from "@chakra-ui/react";
const Card = ({ children, showcard = false, ...props }) => {
  return (
    <ChakraCard.Root
      bg={{
        base: showcard ? "white" : "transparent",
        md: "white",
      }}
      p={{
        base: showcard ? "4" : "0",
        md: "6",
      }}
      borderRadius={{
        base: showcard ? "1rem" : "none",
        md: "1rem",
      }}
      boxShadow={{
        base: showcard ? "md" : "none",
        md: "0px 4px 20px rgba(0, 0, 0, 0.05)",
      }}
      width="456px"
      border={{ base: "none", md: "1px " }}
      {...props}
    >
      {children}
    </ChakraCard.Root>
  );
};
Card.Body = ChakraCard.Body;
Card.Header = ChakraCard.Header;
Card.Footer = ChakraCard.Footer;

export default Card;
