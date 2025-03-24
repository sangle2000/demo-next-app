import { NextResponse } from "next/server";

const products = [
    {
        id: 1,
        name: "iPhone 15",
        price: 999,
    },
    {
        id: 2,
        name: "MacBook Pro",
        price: 1999,
    },
    {
        id: 3,
        name: "AirPods Pro",
        price: 249,
    }
]

export async function GET(request: Request, { params }: { params : { id: string } }) {
    const { id } = await params;

    const productId = parseInt(id, 10);

    const product = products.find(p => p.id === productId)

    if (!product) {
        return NextResponse.json({ error: "Product not found" }, { status: 404 } as any)
    }

    return NextResponse.json(product)
}
