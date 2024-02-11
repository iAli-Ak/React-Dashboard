import React, { useState } from "react";
import { cartData } from "../data/dummy";
import Button from "./Button";
import { useStateContext } from "../context/ContextProvider";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { MdOutlineCancel } from "react-icons/md";

const Cart = () => {
  const { setActiveCart, currentColor } = useStateContext();
  const totalPrice = cartData.reduce(
    (acc, item) => acc + parseFloat(item.price.replace("$", "")),
    0
  );

  const [itemQuantities, setItemQuantities] = useState({});

  // Function to handle incrementing the quantity
  const handleIncrement = (itemName) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: (prevQuantities[itemName] || 0) + 1,
    }));
  };

  // Function to handle decrementing the quantity
  const handleDecrement = (itemName) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemName]: (prevQuantities[itemName] || 0) - 1,
    }));
  };



  return (
    <div className="bg-half-transparent w-screen fixed nav-item top-0 right-0">
      <div className="float-right h-screen dark:text-gray-200 bg-white dark:bg-[#484B52] w-500">
        <div className="flex justify-between items-center p-4 ml-4">
          <p className="font-semibold text-2xl">Shopping Cart</p>
          <TooltipComponent content="Close" position="BottomCenter">
            <button
              type="button"
              onClick={() => {
                setActiveCart(false);
              }}
              style={{ color: "rgb(153, 171, 180)", borderRadius: "50%" }}
              className="text-2xl p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <MdOutlineCancel style={{ color: "rgb(153, 171, 180)" }} />
            </button>
          </TooltipComponent>
        </div>

        <div className="flex flex-col border-t-1 border-gray-200 p-4">
          {cartData.map((item, index) => (
            <div key={index} className="flex items-center mb-4 mt-5">
              
              <img
                src={item.image}
                alt={item.name}
                className="rounded-lg w-28 h-27 mr-4"
              />

<div className="flex-1">
                <div className="flex justify-between">
                  <p className="font-bold mb-1">{item.name}</p>
                </div>
                <p className="text-sm text-gray-600 mb-1">{item.category}</p>
                <p className="text-lg font-bold">{item.price}</p>
                <div className="flex items-center mt-2">
                    <button
                      className="text-xl font-semibold text-gray-600"
                      onClick={() => handleDecrement(item.name)}

                    >
                      -
                    </button>
                    <input
                      type="number"
                      className="w-12 h-6 text-center border border-gray-300 ml-2 mr-2"
                      value={itemQuantities[item.name] || 0}
                    />
                    <button
                      className="text-xl font-semibold text-gray-600"
                      onClick={() => handleIncrement(item.name)}
                    >
                      +
                    </button>
                  </div>
                
              </div>
            </div>
          ))}
        </div>

        <div className="flex-col border-t-1 border-color p-4 ml-4">
          <p>Total Price: ${totalPrice.toFixed(2)}</p>
          <div className="mt-6">
            <Button
              color="white"
              bgColor={currentColor}
              text="Place Order"
              borderRadius="10px"
              size="xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;