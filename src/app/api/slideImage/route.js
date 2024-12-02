import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        const prisma = new PrismaClient()
        const slideInfo = await prisma.tbl_slide.findMany()
    
        if (!slideInfo) {
            return NextResponse.json({ status: 200, message: 'ไม่พบข้อมูล' });
        }

        return NextResponse.json({ status: 200, slideInfo });
    } catch (error) {
        console.log(error)
    }
}