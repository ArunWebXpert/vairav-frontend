import AuthGuard from "@/guard/auth-guard";
import AuthLayout from "@/layout/auth-layout";
import { Route, Routes } from "react-router";

import NotFound from "@pages/not-found";
import React, { lazy, Suspense } from "react";

//  preloaded Dashboard page for better user experience
const Dashboard = Object.assign(
  lazy(() => import("@/pages/(private)/dashboard")),
  { preload: () => import("@/pages/(private)/dashboard") }
);

// TODO: replace loader with real loader
const Loading = () => {
  return <h1>Loading..</h1>;
};

const PrivateRoutes = () => {
  return (
    <Routes>
      <Route element={<AuthGuard />}>
        <Route element={<AuthLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<Loading />}>
                <Dashboard />
              </Suspense>
            }
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default React.memo(PrivateRoutes);
