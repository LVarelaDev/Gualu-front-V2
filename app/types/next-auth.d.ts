import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // Agregamos el `id` a la sesión
      name: string;
      email: string;
      role: string;
      token: string;
    };
  }

  interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    token: string;
  }

  interface JWT {
    id: string;
    name: string;
    email: string;
    role: string;
    token: string;
  }
}
