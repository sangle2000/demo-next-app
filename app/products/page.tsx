import Link from "next/link";

function Products() {
    return (
        <>
            <div>
                <h1>Products</h1>
                <Link href="/products/1">View Product 1</Link>
                <br />
                <Link href="/products/30">View Product 30</Link>
            </div>
        </>
    )
}

export default Products;