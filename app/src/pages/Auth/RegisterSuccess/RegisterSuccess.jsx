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
import { Link, useNavigate, useParams } from "react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { verifyEmailAddressSignup } from "../../../api/query/userquery";
import { toaster } from "../../../components/ui/toaster";

const RegisterSuccess = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { mutate, isSuccess, isPending } = useQuery({
    queryKey: ["verify-email-token"],
    queryFn: () => verifyEmailAddressSignup({ token }),
    enabled: !!token,
    onSuccess: (data) => {
      navigate("/registerverifyemail", {
        state: { email },
      });
    },
    onError: (error) => {
      toaster.create({
        title: "Signup Error",
        description: error.message,
        type: "error",
      });
      navigate("/signup");
    },
  });

  return (
    <Container>
      <Center minHeight="100vh">
        {isSuccess && (
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
                Successfully Registration
              </Text>
              <Text textAlign="center" textStyle="p2" color="blackAlpha.600">
                Hurray! You have successfully created your account. Enter the
                app to explore all it’s features.
              </Text>
              <Box w="full">
                <Link to="/signin">
                  <Button w="full">Enter the App</Button>
                </Link>
              </Box>
            </VStack>
          </Card>
        )}
      </Center>
    </Container>
  );
};

export default RegisterSuccess;
