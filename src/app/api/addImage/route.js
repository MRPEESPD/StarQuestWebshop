import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req) {
    try {
        const prisma = new PrismaClient()
        const { image } = await req.json()
        const createSlide = await prisma.tbl_slide.create({
            data: {
                image: image
            }
        })
        if (!createSlide) {
            return NextResponse.json({ status: 200, message: 'Error' });
        }

        return NextResponse.json({ status: 200 }, { message: 'ok' });
    } catch (error) {
        console.log(error)
    }
}