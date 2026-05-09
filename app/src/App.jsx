import Dashboard from "./pages/Dashboard/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router";
import TransactionsPage from "./pages/Transactions/Transactions";
import Support from "./pages/Support/Support";
import Signup from "./pages/Auth/Singnup/Signup";
import Signin from "./pages/Auth/Signin/Signin";
import RegisterEmailVerify from "./pages/Auth/RegisterEmailVerify/RegisterEmailVerify";
import RegisterSuccess from "./pages/Auth/RegisterSuccess/RegisterSuccess";
import Forgotpassword from "./pages/Auth/ForgotPassword/Forgotpassword";
import Forgotpasswordsent from "./pages/Auth/ForgotPasswordSent/Forgotpasswordsent";
import Resetpasswordsuccess from "./pages/Auth/ResetPasswordSuccess/Resetpasswordsuccess";
import Resetpassword from "./pages/Auth/ResetPassword/Resetpassword";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "./components/ui/toaster";
import ProtectedRoute from "./components/Auth/ProtectedRoute";
import AlreadySigninRoute from "./components/Auth/AlreadySigninRoute";

const App = () => {
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "/transactions",
      element: (
        <ProtectedRoute>
          <TransactionsPage />
        </ProtectedRoute>
      ),
    },
    {
      path: "/support",
      element: (
        <ProtectedRoute>
          <Support />
        </ProtectedRoute>
      ),
    },
    {
      path: "/signup",
      element: (
        <AlreadySigninRoute>
          <Signup />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/signin",
      element: (
        <AlreadySigninRoute>
          <Signin />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/registerverifyemail",
      element: (
        <AlreadySigninRoute>
          <RegisterEmailVerify />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/email-verify/:token",
      element: (
        <AlreadySigninRoute>
          <RegisterSuccess />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgotpassword",
      element: (
        <AlreadySigninRoute>
          <Forgotpassword />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgotsuccess/",
      element: (
        <AlreadySigninRoute>
          <Forgotpasswordsent />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/forgot-password-verify/:token",
      element: (
        <AlreadySigninRoute>
          <Resetpassword />
        </AlreadySigninRoute>
      ),
    },
    {
      path: "/resetsuccess",
      element: (
        <AlreadySigninRoute>
          <Resetpasswordsuccess />
        </AlreadySigninRoute>
      ),
    },
  ]);

  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default App;
