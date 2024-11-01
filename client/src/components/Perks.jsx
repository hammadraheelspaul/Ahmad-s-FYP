import React, { useState } from 'react';

const Perks = () => {
  const [perks, setPerks] = useState([]);
  const [newPerk, setNewPerk] = useState({
    title: '',
    description: '',
    amount: '',
    deliveryDate: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewPerk((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const addPerk = () => {
    setPerks([...perks, newPerk]);
    setNewPerk({
      title: '',
      description: '',
      amount: '',
      deliveryDate: '',
      quantity: ''
    });
  };

  const removePerk = (index) => {
    const newPerks = perks.filter((_, i) => i !== index);
    setPerks(newPerks);
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-black shadow-lg rounded-lg ">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold text-teal-100">Add Perks to Your Campaign</h2>
        <p className="text-teal-200">Provide attractive perks to motivate backers to support your campaign.</p>
      </header>
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="perk-form mb-2 bg-gray-300 p-5 rounded-lg shadow-sm w-1/2 ">
          <input
            type="text"
            name="title"
            placeholder="Perk Title"
            value={newPerk.title}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="description"
            placeholder="Perk Description"
            value={newPerk.description}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="amount"
            placeholder="Amount"
            value={newPerk.amount}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="date"
            name="deliveryDate"
            placeholder="Estimated Delivery Date"
            value={newPerk.deliveryDate}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="number"
            name="quantity"
            placeholder="Quantity Available (optional)"
            value={newPerk.quantity}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={addPerk}
            className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-100 transition duration-300"
          >
            Add Perk
          </button>
        </div>
      </div>
      <div className="perks-list mb-2">
        <h3 className="text-3xl font-bold text-teal-200 mb-1 text-center mt-1">Perks</h3>
        {perks.map((perk, index) => (
          <div key={index} className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-xs lg:flex-shrink-0 mb-4">
            <div className="rounded-2xl bg-white mt-8 py-5 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-10">
              <div className="mx-auto max-w-xs px-2">
                <p className="text-base font-semibold text-gray-600">{perk.title}</p>
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-gray-900">${perk.amount}</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
                </p>
                <p className="mt-2 text-gray-600">{perk.description}</p>
                <p className="mt-2 text-gray-600">Delivery Date: {perk.deliveryDate}</p>
                {perk.quantity && <p className="mt-2 text-gray-600">Quantity: {perk.quantity}</p>}
                <button
                  onClick={() => removePerk(index)}
                  className="mt-6 mx-auto block w-1/2 rounded-md bg-black px-1 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
                >
                  Remove Perk
                </button>
                <p className="mt-6 text-xs leading-5 text-gray-600">Invoices and receipts available for easy company reimbursement</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="actions flex justify-between">
        <button
          onClick={() => { /* Navigate to previous page */ }}
          className="bg-gray-300 text-gray-800 p-3 rounded-md hover:bg-gray-400 transition duration-300"
        >
          Back
        </button>
        <button
          onClick={() => { /* Navigate to next page */ }}
          className="bg-gray-100 text-black p-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Perks;