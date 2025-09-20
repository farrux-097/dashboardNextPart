import { NextResponse } from "next/server";

export const POST = async (req: Request) => {
    const user = await req.json();

    const response = await fetch("https://api.errorchi.uz/auth/signin", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
    });

    if (!response.ok) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
    const data = await response.json();

    const res = NextResponse.json({ success: true });
    res.cookies.set("token", data.data.accessToken, {
        httpOnly: true,
        maxAge: 60 * 60 * 24 * 7,
    });
    return res;
};
