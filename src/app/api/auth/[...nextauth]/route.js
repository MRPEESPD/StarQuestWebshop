import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'
import { NextResponse } from "next/server";

const prisma = new PrismaClient()
const authOptions = {
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {},
            async authorize(credentials) {

                const { username, password } = credentials;

                try {

                    const user = await prisma.tbl_users.findFirst({
                        where: {
                            realname: username
                        }
                    });

                    if (!user) {
                        return new NextResponse.json({ status: 401 });
                    }

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (!passwordMatch) {
                        return new NextResponse.json({ status: 401 });
                    }

                    return user
                } catch (error) {
                    throw new Error("ชื่อตัวละครหรือรหัสผ่านไม่ถูกต้อง")
                }

            }
        })
    ],
    pages: {
        signIn: '/',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role
                token.point = user.point
                token.realname = user.realname
            }

            return token
        },
        async session({ session, token }) {
            if (token && session.user) {
                session.user.role = token.role
                session.user.point = token.point
                session.user.realname = token.realname
            }
            return session
        }
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST }