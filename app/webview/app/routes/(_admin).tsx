import { Outlet } from "@remix-run/react";
import { Layout } from "~/components/admin/layout";

import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Dashboard" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function AdminLayout() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}