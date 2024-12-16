"use client";
import Sidebar from "@/modules/core/components/layout/sidebar/Sidebar";

import Navbar from "@/modules/core/components/layout/navbar/Navbar";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const ManageLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (session === null && status === "unauthenticated") {
      router.push("/login");
    }
  }, [session, router]);

  if (!session) {
    return <>{children}</>;
  } else if (session && status === "authenticated") {
    return (
      <>
        {pathname !== "/login" && (
          <main className="flex flex-grow overflow-hidden">
            <Sidebar />
            <section className="flex-1">
              <Navbar />
              <section className="px-10 py-5">{children}</section>
            </section>
          </main>
        )}
      </>
    );
  }
};

export default ManageLayout;
