// Import necessary React modules
import React, { useState } from 'react';

// Functional component for the ForgetPass component
const ForgetPass = () => {
  // State to store the user input for email
  const [email, setEmail] = useState('');

  // Function to handle forget password
  const handleForgetPass = () => {
    // TODO: Implement forget password logic here
    console.log('Email:', email);
    // Reset the form after the forget password request
    setEmail('');
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
        <p className="text-gray-600 mb-4">
          Enter your email address and we'll send you a link to reset your password.
        </p>
        <label className="block mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Email"
            required
          />
        </label>
        <button
          type="button"
          onClick={handleForgetPass}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Reset Password
        </button>
        <div className="text-center mt-4">
          <span className="text-gray-600">Remember your password? </span>
          <a href="#" className="text-blue-500 hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

// Export the ForgetPass component for use in other files
export default ForgetPass;