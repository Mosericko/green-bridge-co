import Footer from "@/layouts/footer";
import React from "react";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <div className="min-h-screen">
      <Outlet />
      <Footer />
    </div>
  );
}
