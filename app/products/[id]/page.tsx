async function ProductDetail({ params }: { params?: { id: string } }) {
    return (
        <>
            <h1 className="text-3xl font-bold">Product ID: {params.id}</h1>
        </>
    )
}

export default ProductDetail;
