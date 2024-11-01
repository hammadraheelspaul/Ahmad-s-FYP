# LEEP

## How to Use the Backend

To run the project, follow these steps:

1. Install the necessary dependencies:

    npm install


2. Navigate to the client directory and install its dependencies:

    cd client
    npm install
    cd ..


3. Start the development server:

    npm run dev


Now, both the frontend and backend servers should be connected.

### Environment Variables

To use the APIs, please create a `.env` file in the root folder and place the content I sent in the group there. After setting up the `.env` file, the APIs should work as expected.

All the APIs are available at:

http://localhost:5200/api/[routes here]





You can test if the APIs are working by clicking on this link:

http://localhost:5200/api/helloWorld







### Calling APIs from the Frontend

You can call these APIs on the frontend. For example, to sign up a user, use the following `useEffect` code:

import { useEffect } from 'react';
import axios from 'axios';

const SignupComponent = () => {
  useEffect(() => {
    const signup = async () => {
      try {
        const response = await axios.post('http://localhost:5200/api/signup', {
          name: 'zain2',
          email: 'namew1@gmail.com',
          password: '123456',
          address: 'adasd adas ads',
          phone: '123213',
        });
        console.log(response.data);
      } catch (error) {
        console.error('Error signing up:', error);
      }
    };

    signup();
  }, []);

  return (
    <div>
      <h1>Signup</h1>
    </div>
  );
};

export default SignupComponent;

