import ProductItem from "../../components/ProductItem";

const OrderableProductItem = ({product}) => {
    const handleClick = () => {
        console.log("버튼클릭")
    };

    return <ProductItem product={product} onClick={handleClick} />
};

export default OrderableProductItem;