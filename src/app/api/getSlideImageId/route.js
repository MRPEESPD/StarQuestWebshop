import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const prisma = new PrismaClient()
        const { id } = await req.json()
        const slide = await prisma.tbl_slide.findFirst({
            where: {
                id: id
            }
        })
    
        if (!slide) {
            return NextResponse.json({ status: 200, message: 'ไม่พบข้อมูล' });
        }

        return NextResponse.json({ status: 200, slide });
    } catch (error) {
        console.log(error)
    }
}