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
          const response = await axiosIntance.post("Auth", {
            email: credentials?.email,
            password: credentials?.password,
          });

          const user = response.data.data;

          if (user && user.token) {
            return {
              id: user.userId, // ID único del usuario
              email: user.email,
              name: user.name,
              role: user.role,
              token: user.token,
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
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
        token.token = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = {
        id: token.id as string, // `id` ya está permitido por el tipo extendido
        name: token.name as string,
        email: token.email as string,
        role: token.role as string,
        token: token.token as string,
      };
      return session;
    },
  },
  pages: {
    signIn: "/login", // Ruta personalizada para el login
  },
  secret: process.env.NEXTAUTH_SECRET, // Configura esto en tu archivo .env
});

export { handler as GET, handler as POST };
