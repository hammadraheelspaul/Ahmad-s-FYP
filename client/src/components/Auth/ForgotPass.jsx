// Import necessary React modules
import React, { useState } from 'react';
import axios from 'axios';

// Functional component for the ForgetPass component
const ForgetPass = () => {
  // State to store the user input for email
  const [email, setEmail] = useState('');
  const [allow, setAllow] = useState(false);
  const [showErrorMessahe, setShowErrorMessahe] = useState(false);

  // Function to handle forget password
  const handleForgetPass = async () => {
    // TODO: Implement forget password logic here
    try {
      const res = await axios.post("http://localhost:5200/api/requestPasswordReset", { userId: email });
      console.log(res);

      if (res.status === 200) {
        setAllow(true);
      }
    } catch (error) {
      console.error("Error in requesting password reset:", error);
      setShowErrorMessahe(true);
      setTimeout(() => {
        setShowErrorMessahe(false)
      }, 3000);
    }
  };

  const handleUpdatePassword = async (newPassword) => {
    try {
      await axios.put('http://localhost:5200/api/resetPassword',
      {email: email, password: newPassword});

      alert("Password Updated Successfully");
    } catch (error) {
      alert("Somthing went wrong!");
    }

  }
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {
        allow ?
          <ResetPasswordDialogue handleUpdatePassword={handleUpdatePassword} />
          :
          <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
            <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
            <p className="text-gray-600 mb-4">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            {
              showErrorMessahe &&
              <div className='text-red-500 animate-pulse'>Incorrect Email</div>
            }
            <label className="block mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={`w-full border rounded py-2 px-3 focus:outline-none focus:border-blue-500 ${showErrorMessahe ? 'border-red-500 text-red-500 animate-pulse ' : 'border-gray-300'}`}
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

      }
    </div>
  );
};

function ResetPasswordDialogue({ handleUpdatePassword }) {
  const [newPassword, setNewPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdatePassword(newPassword);
  }
  return (
    <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>

      <form onSubmit={handleSubmit}>

        <label className="block mb-4">
          <input
            type="text"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Enter new password"
            required
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
        >
          Reset Password
        </button>
      </form>
      <div className="text-center mt-4">
        <span className="text-gray-600">Remember your password? </span>
        <a href="#" className="text-blue-500 hover:underline">
          Log in
        </a>
      </div>
    </div>
  )
}
// Export the ForgetPass component for use in other files
export default ForgetPass;