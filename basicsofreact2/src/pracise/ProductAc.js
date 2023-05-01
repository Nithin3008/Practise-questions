export default function ac() {
    const product = {
        id: "AC1023",
        name: "Air Conditioner",
        price: 29600,
        specification: "1 Ton, 4 Star Rating",
        warranty: "5 Years Compressor Warranty"
    };
    return (<div>
        <h1>product:{product.name}</h1>
        <h3>price:{product.price}</h3>
        <h3>specification:{product.specification}</h3>
        <h3>warranty:{product.warranty}</h3>
    </div>)

}