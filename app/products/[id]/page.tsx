type Props = {
    params: Promise<{
        id: string
    }>
}

async function ProductDetail( props: Props ) {
    const { id } = await props.params

    return (
        <>
            <h1 className="text-3xl font-bold">Product ID: {id}</h1>
        </>
    )
}

export default ProductDetail;
