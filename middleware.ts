import { NextResponse, NextRequest } from "next/server";
export function middleware(request: NextRequest) {
    NextResponse.next();
}