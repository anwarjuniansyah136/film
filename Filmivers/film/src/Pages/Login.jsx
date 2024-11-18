import  { useState } from 'react';
import Cookies from 'js-cookie';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username:username, password:password })
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        Cookies.set('token', data.token, { expires: 1 });
        Cookies.set('role',data.role,{expires:1});
        navigate("/list-film");
      } else {
        setError("Login failed. Please check your username and password.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
      {error && <p className="text-red-500 text-sm">{error}</p>}
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            Dont have an account?{' '}
            <Link to="/create-account" className="text-blue-500 hover:text-blue-600 font-medium">
              Create
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
