import React from "react";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import ProductItem from "../../components/ProductItem";

import ProductApi from "shared/api/ProductApi";
import OrderableProductItem from "./OrderableProductItem";

class ProductPage extends React.Component {
    constructor() {
        super();
        this.state = {
            productList: [],
        }
    }

    async fetch() {
        try {
            const productList = await ProductApi.fetchProductList();
            this.setState({productList});
        } catch(e) {
            console.error(e);
        };
    };

    // 컴포넌트가 렌더되고 돔에 마운트 되었을 때 fetch() 실행
    componentDidMount() {
        this.fetch();
    };

    render() {
        return (
            <div className="ProductPage">
                <Page header={<Title>메뉴목록</Title>} footer={<Navbar />}>
                    <ul>
                        {this.state.productList.map(product => (
                            <li key={product.id}>
                                <OrderableProductItem product={product} />
                            </li>
                        ))}
                    </ul>
                </Page>
            </div>
        );
    };
};

export default ProductPage;