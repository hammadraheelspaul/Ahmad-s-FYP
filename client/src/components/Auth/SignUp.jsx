import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ProjectsContext } from "../../contexts/ProjectsProvider";

import axios from 'axios';


const Signup = () => {
  const [uName, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsChecked, setTermsChecked] = useState(false);
  const { setUser } = useContext(ProjectsContext);
  const navigate = useNavigate();




  const handleSignup = async () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5200/api/signup', {
        name: uName,
        email,
        password,
        address, // add this
        phone, // and this
      });
      // If the signup was successful, save the username and email in the state
      setUser({ username: uName, email });

      // Alert the user and redirect to "/"
      alert('Signup successful!');
      navigate('/');
    } catch (error) {
      // Handle error
      console.error(error);
      alert(`Signup failed: ${error.response.data}`);
    }

    // Reset the form after the signup request
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    setTermsChecked(false);
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Sign Up</h2>
        <label className="block mb-4">
          <input
            type="text"
            value={uName}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="uName"
            required
          />
        </label>
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
        <label className="block mb-4">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Password"
            required
          />
        </label>
        <label className="block mb-4">
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Confirm Password"
            required
          />
        </label>
        <label className="block mb-4">
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Address"
            required
          />
        </label>
        <label className="block mb-4">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
            placeholder="Phone"
            required
          />
        </label>
        <label className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={termsChecked}
            onChange={() => setTermsChecked(!termsChecked)}
            className="mr-2"
          />
          <span className="text-gray-600">
            I agree to the{' '}
            <a href="#" className="text-blue-500 hover:underline">
              Terms of Service
            </a>
          </span>
        </label>
        <button
          type="button"
          onClick={handleSignup}
          disabled={!termsChecked}
          className={`${termsChecked ? 'bg-green-500 hover:bg-green-700' : 'bg-gray-300 cursor-not-allowed'
            } text-white px-4 py-2 rounded w-full`}
        >
          Sign Up
        </button>
        <div className="text-center mt-4">
          <span className="text-gray-600">Already have an account? </span>
          <Link to='/signin' className="text-blue-500 hover:underline">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

// Export the Signup component for use in other files
export default Signup;