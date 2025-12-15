import bcrypt from "bcryptjs";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { authConfig } from "./lib/auth.config";
import { connectDB } from "./lib/connectDb";
import userModel from "./models/user.model";

export const { handlers, signIn, signOut, auth } = NextAuth({
  secret: process.env.AUTH_SECRET,
  trustHost: true,
  ...authConfig,
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
        const isMatch = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isMatch) {
          return null;
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
        let existingUser = await userModel.findOne({ email: user.email });

        if (!existingUser) {
          existingUser = await userModel.create({
            email: user.email,
            name: user.name,
            role: "user",
            method: "google"
          });
        }
        user.id = existingUser._id.toString();
        user.role = existingUser.role;
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
  }
});
