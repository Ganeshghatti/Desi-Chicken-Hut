import dbConnect from "@/lib/db";
import Product from "@/model/Product";
import { NextResponse } from "next/server";

// GET all products
export async function GET(request) {
  try {
    await dbConnect();
    const products = await Product.find();

    if (!products) {
      return NextResponse.json(
        { error: "Products not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      products,
    });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch products" },
      { status: 500 }
    );
  }
}

// CREATE new product
export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();

    const data = await request.json();

    // Create new product
    const newProduct = await Product.create({
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (!newProduct) {
      return NextResponse.json(
        { error: "Failed to create product" },
        { status: 500 }
      );
    }

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to create product" },
      { status: 500 }
    );
  }
}
