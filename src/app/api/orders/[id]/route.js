import dbConnect from "@/lib/db";
import Order from "@/model/Order";
import { NextResponse } from "next/server";
import { auth } from "@/app/auth";

export async function GET(request, { params }) {
  const { id } = await params;

  try {
    await dbConnect();
    const order = await Order.findById(id)
      .populate("user", "name email")
      .populate("orderItems.product", "name price");

    if (!order) {
      return NextResponse.json({ error: "Order not found" }, { status: 404 });
    }

    return NextResponse.json(order, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch order details" },
      { status: 500 }
    );
  }
}
