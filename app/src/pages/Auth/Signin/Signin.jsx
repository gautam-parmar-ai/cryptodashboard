import {
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Field,
  Flex,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { toaster } from "../../../components/ui/toaster";
import { useMutation } from "@tanstack/react-query";

import { Formik, Form, Field as FormikField } from "formik";
import { Link } from "react-router";
import { object, string, ref } from "yup";
import Card from "../../../components/Card";
import { signinUser } from "../../../api/query/userquery";
import useAuth from "../../../hooks/useAuth";

const signinValidationSchema = object({
  email: string().email().required("Enter your email"),

  password: string()
    .min(6, "Password should be minimum 6 digits")
    .required("Password is Required"),
});

const Signin = () => {
  const { login } = useAuth();
  const { mutate, isPending, error, isError } = useMutation({
    mutationKey: ["signin"],
    mutationFn: signinUser,

    onSuccess: (data) => {
      const { token } = data;
      if (token) {
        login(token);
      }
      toaster.create({
        title: "Signed in successfully",
        type: "success",
      });
    },
    onError: (error) => {
      toaster.create({
        title: "SignIn Error",
        description: error.message,
        type: "error",
      });
    },
  });

  return (
    <Container bg="white">
      <Center minH="100vh">
        <Card>
          <Card.Body>
            <Text textStyle="h1">Welcome to Cryto App</Text>
            <Text textStyle="p2" pt="2" color="gray.400">
              Enter your credentials to access the account.
            </Text>
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              onSubmit={(values) => {
                console.log(values);

                mutate(values);
              }}
              validationSchema={signinValidationSchema}
            >
              {() => (
                <Form>
                  <Stack mt="10" gap="6">
                    <FormikField name="email">
                      {({ field, meta }) => (
                        <Field.Root invalid={!!(meta.error && meta.touched)}>
                          <Field.Label>Email</Field.Label>
                          <Input
                            {...field}
                            name="email"
                            type="email"
                            placeholder="Enter your Email"
                          />
                          <Field.ErrorText>{meta.error}</Field.ErrorText>
                        </Field.Root>
                      )}
                    </FormikField>
                    <FormikField name="password">
                      {({ field, meta }) => (
                        <Field.Root invalid={!!(meta.error && meta.touched)}>
                          <Field.Label>Password</Field.Label>
                          <Input
                            {...field}
                            name="password"
                            type="password"
                            placeholder="Enter your Password"
                          />
                          <Field.ErrorText>{meta.error}</Field.ErrorText>
                        </Field.Root>
                      )}
                    </FormikField>

                    <HStack justify="space-between">
                      <Checkbox.Root>
                        <Checkbox.HiddenInput />
                        <Checkbox.Control />
                        <Checkbox.Label fontSize="xs">
                          Remember Me{" "}
                        </Checkbox.Label>
                      </Checkbox.Root>
                      <Text fontSize="xs" fontWeight="600" color="primary">
                        <Link to="/forgotpassword">
                          <Text as="span">Forgot Password?</Text>
                        </Link>
                      </Text>
                    </HStack>

                    <Box>
                      <Button isPending={isPending} type="submit" w="full">
                        Log In
                      </Button>
                      <Link to="/signup">
                        <Button width="full" mt="3" variant="outline">
                          Create Account
                        </Button>
                      </Link>
                    </Box>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card>
      </Center>
    </Container>
  );
};

export default Signin;
