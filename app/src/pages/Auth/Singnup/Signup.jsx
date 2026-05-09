import {
  Box,
  Button,
  Card,
  CardBody,
  Center,
  Checkbox,
  Container,
  Field,
  Flex,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { toaster } from "../../../components/ui/toaster";
import { useMutation } from "@tanstack/react-query";
import { Formik, Form, Field as FormikField } from "formik";
import { Link, useNavigate } from "react-router";
import { object, string, ref } from "yup";
import { signupUser } from "../../../api/query/userquery";
import { useState } from "react";

const signupValidationSchema = object({
  firstname: string().required("Enter your name"),
  lastname: string().required("Enter your surname"),
  email: string().email().required("Enter your email"),

  password: string()
    .min(6, "Password should be minimum 6 digits")
    .required("Password is Required"),
  repeatpassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Repeat Password is Required"),
});

const Signup = () => {
  const [email, setEmail] = useState();
  const navigate = useNavigate();
  const { mutate, isPending, error, isError } = useMutation({
    mutationKey: ["signup"],
    mutationFn: signupUser,
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
    },
  });
  return (
    <Container>
      <Center minH="100vh">
        <Card.Root p="6" borderRadius="16px" width="456px">
          <Card.Body>
            <Text textStyle="h1">Welcome to Cryto App</Text>
            <Text textStyle="p2" pt="2" color="gray.400">
              Create a free account by filling data below.
            </Text>
            <Formik
              initialValues={{
                firstname: "",
                lastname: "",
                email: "",
                password: "",
                repeatpassword: "",
              }}
              onSubmit={(values) => {
                const payload = {
                  firstName: values.firstname,
                  lastName: values.lastname,
                  email: values.email,
                  password: values.password,
                };
                console.log("Sending payload:", payload);
                mutate(payload);
                setEmail(values.email);
              }}
              validationSchema={signupValidationSchema}
            >
              {() => (
                <Form>
                  <Stack mt="10" gap="6">
                    <Flex gap="4">
                      <FormikField name="firstname">
                        {({ field, meta }) => (
                          <Field.Root invalid={!!(meta.error && meta.touched)}>
                            <Field.Label>Name</Field.Label>
                            <Input
                              {...field}
                              name="firstname"
                              placeholder="Enter your Name"
                            />
                            <Field.ErrorText>{meta.error}</Field.ErrorText>
                          </Field.Root>
                        )}
                      </FormikField>

                      <FormikField name="lastname">
                        {({ field, meta }) => (
                          <Field.Root invalid={!!(meta.error && meta.touched)}>
                            <Field.Label>Surname</Field.Label>
                            <Input
                              {...field}
                              name="lastname"
                              placeholder="Enter your Surname"
                            />
                            <Field.ErrorText>{meta.error}</Field.ErrorText>
                          </Field.Root>
                        )}
                      </FormikField>
                    </Flex>
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

                    <FormikField name="repeatpassword">
                      {({ field, meta }) => (
                        <Field.Root invalid={!!(meta.error && meta.touched)}>
                          <Field.Label>Repeat Password</Field.Label>
                          <Input
                            {...field}
                            name="repeatpassword"
                            type="password"
                            placeholder="Repeat your Password"
                          />
                          <Field.ErrorText>{meta.error}</Field.ErrorText>
                        </Field.Root>
                      )}
                    </FormikField>

                    <Checkbox.Root>
                      <Checkbox.HiddenInput />
                      <Checkbox.Control />
                      <Checkbox.Label fontSize="xs">
                        I agree with{" "}
                      </Checkbox.Label>
                      <Box color="primary" as="span" fontSize="xs">
                        Terms & Conditions.
                      </Box>
                    </Checkbox.Root>

                    <Button type="submit" isPending={isPending}>
                      Create Account
                    </Button>
                    <Text fontSize="xs" color="gray.600">
                      Already have an account ?{" "}
                      <Link to="/signin">
                        <Text as="span">Log In</Text>
                      </Link>
                    </Text>
                  </Stack>
                </Form>
              )}
            </Formik>
          </Card.Body>
        </Card.Root>
      </Center>
    </Container>
  );
};

export default Signup;
