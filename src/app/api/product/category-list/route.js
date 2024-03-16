import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const prisma = new PrismaClient();
    const result = await prisma.categories.findMany();
    return NextResponse.json({ status: "success", data: result })
  } catch (e) {
    return NextResponse.json({ status: "fail", data: e })
  }
}