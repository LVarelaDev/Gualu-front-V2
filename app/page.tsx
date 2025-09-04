"use client";

import InputText from "@/components/ui/Inputs/InputText";
import DashboardContainer from "@/modules/dashboard/components/DashboardContainer";
import { Button } from "@heroui/react";
import { useSession } from "next-auth/react";
import { useForm } from "react-hook-form";

export default function Home() {
  return <DashboardContainer />;
}
