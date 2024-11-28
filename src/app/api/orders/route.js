import Order from "@/model/Order";
import dbConnect from "@/lib/db";
import { NextResponse } from "next/server";

// GET all orders
export async function GET(request) {
  try {
    await dbConnect();

    const orders = await Order.find()
      .populate("user", "name email")
      .populate("orderItems.product", "name price");

    if (!orders) {
      return NextResponse.json({ error: "Orders not found" }, { status: 404 });
    }

    return NextResponse.json({ orders });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch orders" },
      { status: 500 }
    );
  }
}

// CREATE new order
export async function POST(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await dbConnect();

    const { orderItems, address, status } = await request.json();

    // Create new order
    const newOrder = await Order.create({
      user: session.user.id,
      orderItems,
      address,
      status: status || "Processing",
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    if (!newOrder) {
      return NextResponse.json(
        { error: "Failed to create order" },
        { status: 500 }
      );
    }

    return NextResponse.json(newOrder, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to create order" },
      { status: 500 }
    );
  }
}
