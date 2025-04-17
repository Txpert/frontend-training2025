import NextAuth from 'next-auth'
import config from '../../../../auth.config' // Adjust path if needed

const handler = NextAuth(config)

export { handler as GET, handler as POST }