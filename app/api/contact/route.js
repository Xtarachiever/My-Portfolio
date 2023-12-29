import connectMongo from "@/database/conn";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    connectMongo().catch((error)=>NextResponse.json({ message: "Connection Failed...!" }))
    return NextResponse.json({ message: 'Hello' });
}
