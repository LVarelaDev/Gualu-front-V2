import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      active: boolean;
      role: string;
      nif: string;
      kind: string;
      token: string;
    };
  }

  interface User {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    active: boolean;
    role: string;
    nif: string;
    kind: string;
    token: string;
  }

  interface JWT {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    active: boolean;
    role: string;
    nif: string;
    kind: string;
    token: string;
  }
}
