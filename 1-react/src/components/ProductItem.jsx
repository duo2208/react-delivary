import Button from "./Button";

const ProductItem = ({product}) => {
    const {name, price, thumbnail} = product;

    return(
        <div className="ProductItem">
            <div className="description">
                <h2>{name}</h2>
                <div>{price.toLocaleString()}원</div>
                <Button styleType={'brand'} onClick={()=>console.log('주문하기 클릭')}>주문하기</Button>
            </div>
            <div className="thumbnail">
                <img src={thumbnail} alt={name} />
            </div>
        </div>
    );
};

export default ProductItem;