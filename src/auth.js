import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { connectDB } from "./lib/connectDb";
import userModel from "./models/user.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  // ...authConfig,
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          scope: "openid email profile"
        }
      }
    }),

    Credentials({
      async authorize(credentials) {
        // Validate input
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Missing credentials");
        }

        await connectDB();

        const user = await userModel.findOne({ email: credentials.email });
        if (!user) throw new Error("User not found");

        // Use bcrypt to compare hashed passwords
        const isMatch = credentials.password.trim() === user.password.trim();
        console.log({ isMatch });

        if (!isMatch) {
          throw new Error("Invalid credentials");
        } else {
          return {
            id: user._id.toString(),
            role: user.role,
            name: user.name,
            email: user.email
          };
        }
      }
    })
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === "google") {
        await connectDB();
        const existingUser = await userModel.findOne({ email: user.email });

        if (!existingUser) {
          await userModel.create({
            email: user.email,
            name: user.name,
            role: "user"
          });
        }
      }
      return true;
    },

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
        token.name = user.name;
        token.email = user.email;
      }
      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
          role: token.role
        }
      };
    }
  },
  pages: {
    signIn: "/login"
  },

  session: {
    strategy: "jwt",
    maxAge: 5 * 60
  }
});
