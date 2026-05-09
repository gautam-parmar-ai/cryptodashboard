import React from "react";
import Card from "../../../components/Card";
import {
  Box,
  Button,
  Center,
  Container,
  Icon,
  Text,
  VStack,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { useLocation, useParams } from "react-router";

const Forgotpasswordsent = () => {
  const { state } = useLocation();
  const email = state?.email;
  return (
    <Container>
      <Center minHeight="100vh">
        <Card
          p={{
            base: "4",
            md: "10",
          }}
          showcard={true}
        >
          <VStack gap="6">
            <Icon as={MdCheckCircle} boxSize="48px " color="green" />
            <Text textStyle="h4" fontWeight="medium" color="black">
              Successfully Sent
            </Text>
            <Text textAlign="center" textStyle="p2" color="blackAlpha.600">
              We have sent instructions on how to reset your password to
              <Box as="b">{email}</Box>. Please follow the instructions from the
              email.
            </Text>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default Forgotpasswordsent;
