import { useState } from 'react';
import { Link } from 'react-router-dom';

const CreateAccount = () => {
  const [register, setRegister] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (register.password !== register.confirmPassword) {
      alert('Passwords do not match');
      return;
    } else {
      handleAddAccount();
    }
  };

  const handleAddAccount = async () => {
    try {
      const resultUsers = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/get-users`);
      const users = await resultUsers.json();
      const userExists = users.some((item) => item.username === register.username);
  
      if (!userExists) {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/register`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              username: register.username,
              email: register.email,
              password: register.password,
            }),
          }
        );
  
        if (response.ok) {
          alert('Account created successfully!');
        } else {
          alert('Failed to create account');
        }
      } else {
        alert('Username already exists. Please choose a different username.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while creating the account');
    }
  };
  

  const handleChange = (e) => {
    const { id, value } = e.target;
    setRegister((prevRegister) => ({
      ...prevRegister,
      [id]: value,
    }));
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Email:
            </label>
            <input
              type="email"
              id="username"
              value={register.username}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={register.password}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
              Confirm Password:
            </label>
            <input
              type="password"
              id="confirmPassword"
              value={register.confirmPassword}
              onChange={handleChange}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
          >
            Create Account
          </button>
        </form>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Already have an account?{' '}
            <Link to="/signin" className="text-blue-500 hover:text-blue-600 font-medium">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
