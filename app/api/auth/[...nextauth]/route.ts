import axiosIntance from "@/lib/axios.config";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "your-email@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        try {
          const response = await axiosIntance.post("Auth/SignIn", {
            email: credentials?.email,
            password: credentials?.password,
          });

          const userData = response.data.data.user;
          const token = response.data.data.token;

          if (userData && token) {
            return {
              id: userData.id.toString(),
              firstName: userData.firstName,
              lastName: userData.lastName,
              email: userData.email,
              active: userData.active,
              role: userData.role,
              nif: userData.nif,
              kind: userData.kind,
              token: token,
            };
          }
          return null;
        } catch (error) {
          console.error("Error during authorization:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.firstName = user.firstName;
        token.lastName = user.lastName;
        token.email = user.email;
        token.active = user.active;
        token.role = user.role;
        token.nif = user.nif;
        token.kind = user.kind;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string,
        firstName: token.firstName as string,
        lastName: token.lastName as string,
        email: token.email as string,
        active: token.active as boolean,
        role: token.role as string,
        nif: token.nif as string,
        kind: token.kind as string,
        token: token.token as string,
      };
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
