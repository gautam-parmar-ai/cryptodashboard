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
import { Field, Input } from "@chakra-ui/react";

const ContactCard = () => {
  return (
    <Card.Root p="6" borderRadius="16px" flexGrow="1">
      <Stack gap="6">
        <Card.Body fontWeight="medium" fontSize="xm">
          You will receive response within 24 hours of time of submit.
        </Card.Body>
        <HStack
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Field.Root>
            <Field.Label>Name</Field.Label>
            <Input placeholder="Name" />
          </Field.Root>
          <Field.Root>
            <Field.Label>Surname</Field.Label>
            <Input placeholder="Surname" />
          </Field.Root>
        </HStack>
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input type="email" placeholder="Email" />
        </Field.Root>
        <Field.Root>
          <Field.Label>Message</Field.Label>
          <Textarea placeholder="Message" />
        </Field.Root>
        <Checkbox.Root>
          <Checkbox.HiddenInput />
          <Checkbox.Control />
          <Checkbox.Label fontSize="xs">I agree with </Checkbox.Label>
          <Box color="primary" as="span" fontSize="xs">
            Terms & Conditions.
          </Box>
        </Checkbox.Root>
        <Stack>
          <Button>Send A Message</Button>
          <Button variant="gray">Book A Meeting</Button>
        </Stack>
      </Stack>
    </Card.Root>
  );
};

export default ContactCard;
