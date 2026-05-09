import {
  Box,
  Button,
  Center,
  Container,
  Field,
  Icon,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";

import { Formik, Form, Field as FormikField } from "formik";
import { Link, useNavigate } from "react-router";
import { object, string } from "yup";
import Card from "../../../components/Card";
import { MdArrowBack } from "react-icons/md";
import { useMutation } from "@tanstack/react-query";
import { sendForgotEmail } from "../../../api/query/userquery";
import { useEffect, useState } from "react";
import { toaster } from "../../../components/ui/toaster";

const forgotValidationSchema = object({
  email: string().email().required("Enter your email"),
});

const Forgotpassword = () => {
  const [submittedEmail, setSubmittedEmail] = useState("");
  const navigate = useNavigate();
  const { mutate, isSuccess, isPending } = useMutation({
    mutationKey: ["forgot-email"],
    mutationFn: sendForgotEmail,
    onSuccess: (data) => {
      navigate("/forgotsuccess", { state: { email: submittedEmail } });
      console.log(data);
    },
    onError: (error) => {
      toaster.create({
        title: "Forgot Error",
        description: error.message,
        type: "error",
      });
    },
  });

  return (
    <Container>
      <Center minHeight="100vh">
        <Card>
          <Card.Body>
            <Link to="/signin">
              <Icon as={MdArrowBack} boxSize="6" />
            </Link>

            <Text mt="16px" textStyle="h1">
              Forgot Password
            </Text>
            <Text textStyle="p2" pt="2" color="gray.400">
              Enter your email address for which account you want to reset your
              password.
            </Text>
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={(values) => {
                console.log(values);
                setSubmittedEmail(values.email);
                mutate({ email: values.email });
              }}
              validationSchema={forgotValidationSchema}
            >
              {() => (
                <Form>
                  <Stack mt="8" gap="6">
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

                    <Box>
                      <Button type="submit" w="full" variant="outline">
                        Send Password
                      </Button>
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

export default Forgotpassword;
