import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export default function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(`${API_BASE_URL}/api/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    console.log(data)
    if (data.message) {
       toast.success('Registration successful! Please log in.');
        setTimeout(() => {
      navigate('/login');
    }, 2000);
    } else {
      alert(data.message || 'Registration failed');
    }
  };

  return (
    <>      <ToastContainer position="top-right" autoClose={3000} />
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-orange-100 to-red-50 px-4">

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white shadow-xl border border-orange-200 rounded-2xl p-8 w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Create Account 🥗</h2>
        <p className="text-sm text-gray-500 mb-6 text-center">Join the journey through food culture</p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
            <input
              name="name"
              type="text"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              name="email"
              type="email"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              name="password"
              type="password"
              required
              onChange={handleChange}
              className="w-full px-4 py-2 border border-orange-200 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white py-2 rounded-lg font-semibold hover:from-orange-600 hover:to-red-600 transition-all"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{' '}
          <span
            onClick={() => navigate('/login')}
            className="text-orange-500 hover:underline cursor-pointer font-medium"
          >
            Log In
          </span>
        </p>
      </motion.div>
    </div>
    </>
  );
}
