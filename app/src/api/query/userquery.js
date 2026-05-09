import Axios from "../axios";
const USER_URL = "/user";
export const signinUser = async ({ password, email }) => {
  try {
    const response = await Axios.post(`${USER_URL}/signin`, {
      password,
      email,
    });
    return response.data;
  } catch (error) {
    console.log("Full error:", error);
    console.log("Response:", error?.response);
    throw new Error(error?.response?.data?.message || "Something went wrong");
  }
};

export const signupUser = async ({ password, email, firstName, lastName }) => {
  try {
    const response = await Axios.post(`${USER_URL}/signup`, {
      password,
      email,
      firstName,
      lastName,
    });
    return response.data;
  } catch (error) {
    console.log("Full error:", error);
    console.log("Response:", error?.response);
    console.log("Response data:", error?.response?.data);
    console.log("Response message:", error?.response?.data?.message);
    throw new Error(error?.response?.data?.message || "Something went wrong");
  }
};

export const sendVerificationEmail = async ({ email }) => {
  try {
    const response = await Axios.post(`${USER_URL}/send-verification-mail`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.log("Full error:", error);
    console.log("Response:", error?.response);
    console.log("Response data:", error?.response?.data);
    console.log("Response message:", error?.response?.data?.message);
    throw new Error(error?.response?.data?.message || "Something went wrong");
  }
};

export const verifyEmailAddressSignup = async ({ token }) => {
  try {
    const response = await Axios.post(`${USER_URL}/verfiy-user-mail`, {
      token,
    });
    return response.data;
  } catch (error) {
    console.log("Full error:", error);
    console.log("Response:", error?.response);
    console.log("Response data:", error?.response?.data);
    console.log("Response message:", error?.response?.data?.message);
    throw new Error(error?.response?.data?.message || "Something went wrong");
  }
};
export const sendForgotEmail = async ({ email }) => {
  try {
    const response = await Axios.post(`${USER_URL}/forgot-password`, {
      email,
    });
    return response.data;
  } catch (error) {
    console.log("Full error:", error);
    console.log("Response:", error?.response);
    console.log("Response data:", error?.response?.data);
    console.log("Response message:", error?.response?.data?.message);
    throw new Error(error?.response?.data?.message || "Something went wrong");
  }
};
export const verifyForgotToken = async ({ token, password }) => {
  try {
    const response = await Axios.post(`${USER_URL}/verify-forgot-mail`, {
      token,
      password,
    });
    return response.data;
  } catch (error) {
    console.log("Full error:", error);
    console.log("Response:", error?.response);
    console.log("Response data:", error?.response?.data);
    console.log("Response message:", error?.response?.data?.message);
    throw new Error(error?.response?.data?.message || "Something went wrong");
  }
};
