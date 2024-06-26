import NextAuth from "next-auth"

// importing providers
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
    session: {
        strategy: 'jwt'
    },
    providers: [
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID!,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login",
        error: "/auth/error"
    },
})

export { handler as GET, handler as POST }