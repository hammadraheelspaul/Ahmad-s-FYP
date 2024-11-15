import React, { useState } from 'react';

const Team = ({setActiveTab, setFillStatus}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [country, setCountry] = useState('');
  const [streetAddress, setStreetAddress] = useState('');
  const [emailAddress, setEmailAddress] = useState('');

  const [showEmailInValidMessage, setShowEmailInValidMessage] = useState(false);
  const [savedInfo, setSavedInfo] = useState(null);

  const handleSaveInfo = () => {
    setSavedInfo({ firstName, lastName, dob, phoneNumber, country, streetAddress, emailAddress });
  };

  const handleSave = () =>{

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(firstName && lastName && dob
      && phoneNumber && country
      && streetAddress && emailAddress){

        if (emailPattern.test(emailAddress)) {
          alert("Information Saved");
          setFillStatus(4)
        }
        else {
          setShowEmailInValidMessage(true);
          setTimeout(() => {
            setShowEmailInValidMessage(false)
          }, 3000);
        }
      }
      else{
        alert("Please fill all the fields!");
      }
  }
  return (
    <div>

      <div className="team-container">
        <h1 className="title">Contact Information</h1>
        <h1 className="subtitle">
          Please provide your legal address and contact information, or of your company.
          <br />This information may be shared to fulfill reporting or disclosure obligations.
        </h1>

        <div className="input-group">
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="input"
          />
        </div>

        <div className="input-group">
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="input"
          />
          <input
            type="text"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="input"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="input"
          />
        </div>

        <div>
          <input
            type="text"
            placeholder="Street Address"
            value={streetAddress}
            onChange={(e) => setStreetAddress(e.target.value)}
            className="input"
          />
        </div>


        <h1 className="title">Support Email Address</h1>
        <h1 className="subtitle">
          If you don't want to use the Campaign Owner's Leep Account email address to answer questions from backers, please include another that will be used by you or a team member to address backer specific concerns. Learn more about providing great customer service to your backers.
        </h1>

        <div>
          {
            showEmailInValidMessage &&
            <div className='text-red-500 font-bold animate-pulse'>Invalid Email Address</div>
          }
          <input
            type="text"
            placeholder="Email Address"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            className={`input rounded border ${showEmailInValidMessage && 'text-red-500 border-red-500 border-2 animate-pulse'}`}
          />
        </div>

        {/* <button onClick={handleSaveInfo} className="save-button">
          Save Info
        </button> */}
      </div>

      <style>
        {`
          .team-container {
            display: flex;
            flex-direction: column;
            gap: 20px;
            max-width: 800px;
            margin: 0 auto;
            padding-top: 20px;
          }
  
          .title {
            font-size: 2.3em;
            font-weight: bold;
          }
  
          .subtitle {
            font-size: 1.2em;
          }
  
          .input-group {
            display: flex;
            gap: 20px;
          }
  
          .input {
            padding: 15px;
            font-size: 1.2em;
            margin-top: 10px;
            margin-bottom: 10px;
            width: 100%;
            box-sizing: border-box;
          }
  
          .save-button {
            padding: 15px 20px;
            font-size: 1.2em;
            margin-top: 20px;
            margin-bottom: 20px;
            background-color: #007BFF;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            align-self: flex-end;
            transition: color 0.3s;
          }
  
          .save-button:hover {
            color: black;
          }
        `}
      </style>

      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={handleSave}
        >
          Save
        </button>
        {/* <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={handleSave}
        >
          Save
        </button> */}
      </div>

    </div>
  );
};

export default Team;