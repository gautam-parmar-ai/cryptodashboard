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
import { Link } from "react-router";

const Resetpasswordsuccess = () => {
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
              Password Reset Done
            </Text>
            <Text textAlign="center" textStyle="p2" color="blackAlpha.600">
              Now you can access you account.
            </Text>
            <Box width="full">
              <Link to="/signin">
                <Button width="full">Sign In</Button>
              </Link>
            </Box>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default Resetpasswordsuccess;
