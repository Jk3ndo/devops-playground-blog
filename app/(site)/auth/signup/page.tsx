import Signup from "@/components/Auth/Signup";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page | DevOps Playground",

  // other metadata
  description: "This is Sign Up page for DevOps Playground",
};

export default function Register() {
  return (
    <>
      <Signup />
    </>
  );
}
