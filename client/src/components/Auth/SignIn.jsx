// Import necessary React modules
import React, { useState , useContext } from 'react';
import { ProjectsContext } from "../../contexts/ProjectsProvider";
  // Function to handle login
  import { useNavigate , Link} from 'react-router-dom'; // Import useNavigate
// Functional component for the Login component
const SignIn = () => {
  // State to store the user input for email, password, and Remember Me
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { setUser ,setToken } = useContext(ProjectsContext);// Get the setUser function from UserContext


// Inside your component
const navigate = useNavigate(); // Get the navigate function

const handleLogin = async (email, password) => {
    try {
        const response = await fetch('http://localhost:5200/api/signin', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();
if (response.ok) {
    // If the login was successful, store the user data in the UserContext
    console.log(data);
    setUser(data.user);
    setToken(data.token)
    alert('Login successful!');
    
    // Redirect to "/"
    navigate('/');
} else {
    // If the response was not successful, throw an error
    throw new Error(data.error);
}
    } catch (error) {
        // Handle error
        console.error(error);
        alert(`Login failed: ${error.message}`);
    }
};

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white w-full max-w-md p-8 rounded shadow-lg">
        <h2 className="text-3xl font-semibold text-teal-500 mb-6">Login</h2>
        <label className="block mb-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-teal-500"
            placeholder="Email"
            required
          />
        </label>
        <label className="block mb-4">
          <div className="relative">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-teal-500"
              placeholder="Password"
              required
            />
            <span
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              className="absolute inset-y-0 right-0 flex items-center pr-2 cursor-pointer"
            >
              {isPasswordVisible ? (
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2 12s3 3 6 3 6-3 6-3M7.5 7.5l9 9"
                  />
                </svg>
              )}
            </span>
          </div>
        </label>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={rememberMe}
            onChange={() => setRememberMe(!rememberMe)}
            className="mr-2"
          />
          <span className="text-gray-600">Remember me</span>
        </div>
        <button
            type="button"
            onClick={() => handleLogin(email, password)}
            className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 w-full"
        >
            Login
        </button>
        <div className="text-center mt-4">
          <Link to='/forgetpass' className="text-teal-500 hover:underline">
            Forgot your password?
          </Link>
        </div>
        <div className="text-center mt-2">
          <span className="text-gray-600">Don't have an account? </span>
          <Link to='/signup' className="text-teal-500 hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

// Export the Login component for use in other files
export default SignIn;