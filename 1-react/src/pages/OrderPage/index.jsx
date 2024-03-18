import React from "react";
import Page from "../../components/Page";
import Title from "../../components/Title";
import Navbar from "../../components/Navbar";
import OrderStatusCard from "../../components/OrderStatusCard";
import OrderPaymentCard from "../../components/OrderPaymentCard";
import OrderDeliveryCard from "../../components/OrderDeliveryCard";
import OrderApi from "shared/api/OrderApi";

class OrderPage extends React.Component {
    constructor() {
        super();
        this.state = {
            order: null,
        }
    };

    async fetch() {
        try {
            const order = await OrderApi.fetchMyOrder();
            this.setState({order});
        } catch (e) {
            console.error(e);
        };
    };

    componentDidMount() {
        this.fetch();
    }

    render() {
        const { order } = this.state;

        return (
            <div className="OrderPage">
                <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
                    {order && (
                    <>
                        <OrderStatusCard order={order} />
                        <OrderPaymentCard order={order} />
                        <OrderDeliveryCard order={order} />
                    </>
                    )}
                </Page>
            </div>
        );
    };
};

export default OrderPage;