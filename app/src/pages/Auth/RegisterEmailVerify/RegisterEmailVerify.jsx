import React, { useEffect } from "react";
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
import { MdMarkEmailUnread } from "react-icons/md";
import { useLocation } from "react-router";
import { toaster } from "../../../components/ui/toaster";
import { useMutation, useQuery } from "@tanstack/react-query";
import { sendVerificationEmail } from "../../../api/query/userquery";

const RegisterEmailVerify = () => {
  const location = useLocation();
  const email = location.state?.email ?? "Test@gmail.com";

  if (email == "") {
    return <Center>Invalid Email</Center>;
  }

  const { mutate, isSuccess, isPending } = useMutation({
    mutationKey: ["send-verification-mail"],
    mutationFn: sendVerificationEmail,
    onSuccess: (data) => {
      // navigate("/registerverifyemail", {
      //   state: { email },
      // });
      console.log(data);
    },
    onError: (error) => {
      toaster.create({
        title: "Signup Error",
        description: error.message,
        type: "error",
      });
    },
    enabled: !!email,
  });

  useEffect(() => {
    mutate({ email });
  }, [email]);

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
            <Icon as={MdMarkEmailUnread} boxSize="48px " color="primary" />
            <Text textStyle="h4" fontWeight="medium" color="black">
              Email Verification
            </Text>
            <Text textAlign="center" textStyle="p2" color="blackAlpha.600">
              We have sent you an email verification to{" "}
              <Box as="b">{email}</Box>. If you didn’t receive it, click the
              button below.
            </Text>
            <Button
              w="full"
              variant="outline"
              onClick={() => {
                mutate({ email });
              }}
              isPending={isPending}
            >
              Re-Send Email
            </Button>
          </VStack>
        </Card>
      </Center>
    </Container>
  );
};

export default RegisterEmailVerify;
