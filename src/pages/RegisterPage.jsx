import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="w-full max-w-md bg-[#222222] p-8 rounded-lg shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#cca04c]">REGISTER</h2>
        <form className="space-y-4">
          <input type="text" placeholder="Username" className="w-full bg-[#2a2a2a] p-3 border rounded" />
          <input type="tel" placeholder="Mobile Number" className="w-full bg-[#2a2a2a] p-3 border rounded" />
          <input type="password" placeholder="Password" className="w-full bg-[#2a2a2a] p-3 border rounded" />
          <button className="w-full bg-[#a60a27] py-3 font-bold rounded">GET OTP</button>
        </form>
        <button onClick={() => navigate('/login')} className="w-full mt-4 text-sm text-gray-400">Already have an account? Login</button>
      </div>
    </div>
  );
}