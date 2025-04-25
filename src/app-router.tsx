import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import AuthLayout from "./auth/layout/auth-layout";
import { LoginPage } from "./auth/pages/login-page";
import { RegisterPage } from "./auth/pages/register-page";
import { sleep } from "./lib/sleep";
import PrivateRoute from "./auth/components/private-route";
import { useQuery } from "@tanstack/react-query";
import { checkAuth } from "./fake/fake-dta";

const ChatLayout = lazy(async () => {
  await sleep(1000);
  return import("./chat/layout/chat-layout");
});

const ChatPage = lazy(() => import("./chat/pages/chat-page"));
const NoChatSelectedPage = lazy(() => import("./chat/pages/no-chat-selected-page"));

export const AppRouter = () => {

  const { data: user, isLoading, isError, error } = useQuery({
    queryKey: ['user'],
    queryFn: () => {
      const token = localStorage.getItem('token');
      if(!token) throw new Error('Not authenticated');

      return checkAuth(token)
    },
    retry: 0
  });


  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  // if (isError) {
  //   console.log(error)
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="/auth/register" element={<RegisterPage />} />
        </Route>

        <Route
          path="/chat"
          element={
            <Suspense
              fallback={
                <div className="flex h-screen items-center justify-center">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
                </div>
              }
            >
              <PrivateRoute isAuthenticated={!!user}>
                <ChatLayout />
              </PrivateRoute>
            </Suspense>
          }
        >
          <Route index element={<NoChatSelectedPage />} />
          <Route path="/chat/:clientId" element={<ChatPage />} />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
