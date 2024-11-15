import React, { useContext, useEffect, useState } from 'react';
import PerksCard from './perksCard';
import { ProjectsContext } from '../contexts/ProjectsProvider';

const Perks = ({ setActiveTab, fillStatus, setFillStatus }) => {

  const { setCompaignProject, compaignProject } = useContext(ProjectsContext);

  const [perks, setPerks] = useState(compaignProject?.perks || []);

  // useEffect(() => {
  //   console.log("perks: ", perks);
  //   console.log("campaign details: ", compaignProject);
  // }, [perks, compaignProject]);

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
    });
  };

  const removePerk = (index) => {
    const newPerks = perks.filter((_, i) => i !== index);
    setPerks(newPerks);
  };


  const handleSaveAndContinue = () => {

    setCompaignProject({ ...compaignProject, perks });

    setFillStatus([...fillStatus, 1]);
    setTimeout(() => {
      setActiveTab("Content");
    }, 1000); //auto switching tab.
  };

  return (
    <div className="max-w-4xl mx-auto  shadow-lg rounded-lg p-3 space-y-3">
      <header className="">
        <h2 className="text-3xl font-bold text-teal-600">Add Perks to Your Campaign</h2>
        <p className="text-teal-600">Provide attractive perks to motivate backers to support your campaign.</p>
      </header>
      <div className="flex items-center justify-center">
        <div className="perk-form mb-2 bg-gray-300 p-5 rounded-lg shadow-sm ">
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
          {/* <input
            type="date"
            name="deliveryDate"
            placeholder="Estimated Delivery Date"
            value={newPerk.deliveryDate}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
          {/* <input
            type="number"
            name="quantity"
            placeholder="Quantity Available (optional)"
            value={newPerk.quantity}
            onChange={handleChange}
            className="w-full p-3 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          /> */}
          <button
            onClick={addPerk}
            className="w-full bg-black text-white p-3 rounded-md hover:bg-gray-100 transition duration-300"
          >
            Add Perk
          </button>
        </div>
      </div>
      <div className="perks-list mb-2">
        <h3 className="text-3xl font-bold text-teal-600 mb-1 text-center mt-1">Perks</h3>
        {
          perks.map((perk, index) => (
            <PerksCard key={index} perkDetails={perk} />
          ))
        }
      </div>

      <div className="actions flex justify-between">
        <button onClick={handleSaveAndContinue}
          className="bg-teal-600 text-white font-bold w-full py-[10px] rounded hover:bg-slate-400 ">Save and Continue</button>

        {/* <button
         
          className="bg-gray-300 text-gray-800 p-3 rounded-md hover:bg-gray-400 transition duration-300"
        >
          Back
        </button>
        <button
          
          className="bg-gray-100 text-black p-3 rounded-md hover:bg-blue-700 transition duration-300"
        >
          Next
        </button> */}
      </div>
    </div>
  );
};

export default Perks;