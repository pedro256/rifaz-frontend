import NextAuth, { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
    providers: [
        CredentialsProvider({
            name: "auth",
            credentials: {
                username: {
                  label: "Username",
                  type: "text",
                  placeholder: "jsmith",
                },
                password: {
                  label: "Password",
                  type: "password",
                },
              },

            async authorize(credentials, req) {

                const { username, password } = credentials as any;
                const res = await fetch("/auth", {
                    method: 'POST',
                    body: JSON.stringify({
                        username,
                        password
                    }),
                    headers: { "Content-Type": "application/json" }
                })
                const user = await res.json()

                //console.log({ user });

                // If no error and we have user data, return it
                if (res.ok && user) {
                    return user
                }
                // Return null if user data could not be retrieved
                return null
            },

        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            return { ...token, ...user };
        },
        async session({ session, token, user }) {
            // Send properties to the client, like an access_token from a provider.
            session.user = token;

            return session;
        },
    },

    pages: {
        signIn: "/login",
    },
} as NextAuthOptions)