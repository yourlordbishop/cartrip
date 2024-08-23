import type { NextAuthConfig } from 'next-auth';
 
export const authConfig = {
  pages: {
    signIn: '/auth',
  },

  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
    const isLoggedIn = !!auth?.user;
    const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
    const isOnAuth = nextUrl.pathname.startsWith('/auth');

    if (isOnDashboard) {
      if (isLoggedIn) return true;
      return false; // Redirect unauthenticated users to login page
    } else if (isOnAuth) {
      if (isLoggedIn) {
        return Response.redirect(new URL('/dashboard', nextUrl));
      } else {
        return true
      }
    }

    return true;
    },
  },

  providers: [
  
  ], // Add providers with an empty array for now
} satisfies NextAuthConfig;