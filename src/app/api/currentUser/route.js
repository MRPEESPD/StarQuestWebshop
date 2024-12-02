import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const prisma = new PrismaClient()
        const { realname } = await req.json()
        const userInfo = await prisma.tbl_users.findFirst({
            where: {
                realname: realname
            },
            select: {
                realname: true,
                point: true,
                role: true
            }
        })
    
        if (!userInfo) {
            return NextResponse.json({ status: 200, message: 'ไม่พบข้อมูล' });
        }

        return NextResponse.json({ status: 200, userInfo });
    } catch (error) {
        console.log(error)
    }
}