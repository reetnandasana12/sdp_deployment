import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import swal from "sweetalert";
import DeliveryForm from "../components/PlaceOrder/DeliveryForm";
import OrderCard from "../components/PlaceOrder/OrderCard";
import OrderPrice from "../components/PlaceOrder/OrderPrice";
// import { useDelivery } from '../contexts/DeliveryProvider';
// import { useOrder } from '../contexts/OrderProvider';
// import Back from '../routes/Back';

const PlaceOrderScreen = () => {
    const { order, setOrder } = useState(
        {
            name: "1",
        },
        {
            sds: "sd",
        }
    );
    const { input, disabled } = useState({
        country: "india",
        roadNo: "1",
        flatno: "1",
        name: "reet",
    });
    // const history = useHistory();

    // console.log(order);

    return (
        <main className=" h-screen banner">
            <div className="max-w-screen-xl py-20 mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                    <div className="col-span-1">
                        <div className="glass p-6 box-border rounded-lg">
                            <div className=" flex flex-col space-y-3 h-64 overflow-y-scroll orderContainer ">
                                {/* {order.map((item) => (
                                    <OrderCard key={item.id} {...item} />
                                ))} */}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </main>
    );
};

export default PlaceOrderScreen;
