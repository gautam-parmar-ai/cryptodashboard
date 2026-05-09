import {
  Box,
  Button,
  Card,
  Checkbox,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

const SupportCard = ({ leftComponent, title, text, icon }) => {
  return (
    <Flex
      gap="6"
      flexDirection={{
        base: "column",
        xl: "row",
      }}
    >
      <Stack maxWidth="380px">
        <Icon as={icon} boxSize="6" color="primary"></Icon>
        <Text as="h1" textStyle="h1" fontWeight="medium">
          {title}
        </Text>
        <Text as="h6" fontSize="xs" color="blackAlpha.600">
          {text}
        </Text>
      </Stack>
      <Box width="full">{leftComponent}</Box>
    </Flex>
  );
};

export default SupportCard;
