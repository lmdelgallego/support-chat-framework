import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import AuthLayout from "./auth/layout/auth-layout";
import { LoginPage } from "./auth/pages/login-page";
import { RegisterPage } from "./auth/pages/register-page";
import { sleep } from "./lib/sleep";

const ChatLayout = lazy(async () => {
  await sleep(1000);
  return import("./chat/layout/chat-layout");
});

const ChatPage = lazy(() => import("./chat/pages/chat-page"));

export const AppRouter = () => {
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
              <ChatLayout />
            </Suspense>
          }
        >
          <Route index element={<ChatPage />} />
        </Route>

        <Route path="/" element={<Navigate to="/auth" />} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Routes>
    </BrowserRouter>
  );
};
