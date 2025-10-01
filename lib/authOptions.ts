import { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import FacebookProvider from 'next-auth/providers/facebook';
import CredentialsProvider from 'next-auth/providers/credentials';

const googleClientId = process.env.GOOGLE_CLIENT_ID;
const googleClientSecret = process.env.GOOGLE_CLIENT_SECRET;
const facebookClientId = process.env.FACEBOOK_CLIENT_ID;
const facebookClientSecret = process.env.FACEBOOK_CLIENT_SECRET;

export const authOptions: NextAuthOptions = {
  providers: [
    ...(googleClientId && googleClientSecret
      ? [
          GoogleProvider({
            clientId: googleClientId,
            clientSecret: googleClientSecret
          })
        ]
      : []),
    ...(facebookClientId && facebookClientSecret
      ? [
          FacebookProvider({
            clientId: facebookClientId,
            clientSecret: facebookClientSecret
          })
        ]
      : []),
    CredentialsProvider({
      name: 'Guest login',
      credentials: {
        email: { label: 'Email', type: 'text', placeholder: 'you@example.com' }
      },
      async authorize(credentials) {
        if (!credentials?.email) {
          return null;
        }
        return {
          id: credentials.email,
          name: credentials.email.split('@')[0],
          email: credentials.email
        };
      }
    })
  ],
  session: {
    strategy: 'jwt'
  },
  pages: {
    signIn: '/login'
  }
};
