import { NextResponse } from "next/server";
import dbConnect from "@/lib/db";
import User from "@/model/User";

export async function POST(req) {
  try {
    await dbConnect();

    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    const newUser = await User.create({
      name,
      email,
      password,
    });

    return NextResponse.json(
      {
        message: "User registered successfully",
        //   user: {
        //     id: newUser._id,
        //     name: newUser.name,
        //     email: newUser.email
        //   }
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      { error: "Registration failed", details: error.message },
      { status: 500 }
    );
  }
}
