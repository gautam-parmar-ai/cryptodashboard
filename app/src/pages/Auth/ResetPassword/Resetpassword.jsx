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
import { Link, useNavigate, useParams } from "react-router";
import { object, string, ref } from "yup";
import Card from "../../../components/Card";
import { useMutation, useQuery } from "@tanstack/react-query";
import { verifyForgotToken } from "../../../api/query/userquery";
import { toaster } from "../../../components/ui/toaster";

const resetValidationSchema = object({
  password: string()
    .min(6, "Password should be minimum 6 digits")
    .required("Password is Required"),
  newrepeatpassword: string()
    .oneOf([ref("password"), null], "Password must match")
    .required("Repeat New Password is Required"),
});

const Resetpassword = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { mutate, isSuccess, isPending } = useMutation({
    mutationKey: ["verify-forgot-token"],
    mutationFn: verifyForgotToken,
    enabled: !!token,
    onSuccess: (data) => {
      navigate("/resetsuccess");
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
        <Card>
          <Card.Body>
            <Text mt="16px" textStyle="h1">
              Reset Password
            </Text>
            <Text textStyle="p2" pt="2" color="gray.400">
              Enter your New Password
            </Text>
            <Formik
              initialValues={{
                password: "",
                newrepeatpassword: "",
              }}
              onSubmit={(values) => {
                mutate({ token, password: values.password });
              }}
              validationSchema={resetValidationSchema}
            >
              {() => (
                <Form>
                  <Stack mt="8" gap="6">
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

                    <FormikField name="newrepeatpassword">
                      {({ field, meta }) => (
                        <Field.Root invalid={!!(meta.error && meta.touched)}>
                          <Field.Label>Repeat New Password</Field.Label>
                          <Input
                            {...field}
                            name="newrepeatpassword"
                            type="password"
                            placeholder="Repeat your New Password"
                          />
                          <Field.ErrorText>{meta.error}</Field.ErrorText>
                        </Field.Root>
                      )}
                    </FormikField>

                    <Box>
                      <Button type="submit" w="full" variant="outline">
                        Reset Password
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

export default Resetpassword;
