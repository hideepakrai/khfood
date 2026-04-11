import { NextResponse } from "next/server";
import { getAdminProducts, createAdminProduct } from "@/data/admin/products";
import type { Product } from "@/types/cms";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("q") || "";
    const status = searchParams.get("status") || "all";
    const limit = Number(searchParams.get("limit") || 30);

    const products = await getAdminProducts({ limit, query, status });

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Admin products fetch error:", error);
    return NextResponse.json({ message: "Internal server error" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Basic validation is handled inside createAdminProduct
    const updatedProduct = await createAdminProduct({
      highlight: body.highlight,
      slug: body.slug,
      status: body.status as Product["_status"] | undefined,
      stock: body.stock,
      title: body.title,
      weight: body.weight,
    });

    return NextResponse.json({ product: updatedProduct }, { status: 201 });
  } catch (error) {
    console.error("Admin product create error:", error);
    const message = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ message }, { status: message.includes("exists") || message.includes("required") ? 400 : 500 });
  }
}
