import React, { useState, useEffect, useContext } from "react";
import DropIn from "braintree-web-drop-in-react";
import { ProjectsContext } from "../contexts/ProjectsProvider";
const API = "http://localhost:5200/api"; // Replace with your actual API URL

const Checkout = ({ products }) => {
  const { user } = useContext(ProjectsContext);
  // console.log(user)

  const [data, setData] = useState({
    clientToken: null,
    instance: {},
    error: "",
    success: false,
  });

  const handleAmount = (event) => {
    setData({ ...data, amount: event.target.value });
  };
  const userId = user._id; // Replace with actual user ID
  const token = user.token;
  const getBraintreeClientToken = (userId, token) => {
    return fetch(`${API}/braintree/getToken/${userId}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  const processPayment = (userId, token, paymentData) => {
    return fetch(`${API}/braintree/payment/${userId}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(paymentData),
    })
      .then((response) => {
        return response.json();
      })
      .catch((err) => console.log(err));
  };

  const getToken = (userId, token) => {
    getBraintreeClientToken(userId, token).then((data) => {
      if (data.error) {
        setData({ ...data, error: data.error });
      } else {
        setData({ clientToken: data.clientToken });
        console.log(data.clientToken);
      }
    });
  };
  useEffect(() => {
    getToken(userId, token);
  }, []);
  const buy = () => {
    let nonce;
    let getNonce = data.instance.requestPaymentMethod().then((data) => {
      nonce = data.nonce;
      const paymentData = {
        paymentMethodNonce: nonce,
        amount: data.amount, // Use data.amount instead of getTotal(products)
      };
      processPayment(userId, token, paymentData)
        .then((response) => {
          setData({ ...data, success: response.success });
          // handle success
        })
        .catch((error) => {
          // handle error
        });
    });
  };
  const showDropIn = () => (
    <div onBlur={() => setData({ ...data, error: "" })}>
      {data.clientToken !== null ? (
        <div>
          <DropIn
            options={{
              authorization: data.clientToken,
            }}
            onInstance={(instance) => (data.instance = instance)}
          />
          <button onClick={buy}>Pay</button>
        </div>
      ) : null}
    </div>
  );
return (
<div className="flex flex-col items-center justify-center h-screen">
  <div className="text-4xl mb-20">
    Only the brave ones take the Leep!
  </div>
  <div className="flex justify-center w-[80vw] items-center">
    <div className="w-1/2 bg-red-800 text-white flex flex-col items-center justify-center h-[50vh] p-10">
      <h1 className="text-4xl mb-4">Investment</h1>
      <label className="text-2xl">
        How much you want to invest?
        <input
          type="number"
          value={data.amount}
          onChange={handleAmount}
          className="mt-2 p-2 w-full"
        />
      </label>
    </div>
    <div className="w-1/2 border-gray-200  h-[50vh] border-2 p-10">
      {showDropIn()}
    </div>
  </div>
  </div>
);
};

export default Checkout;
