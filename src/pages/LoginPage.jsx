import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#eef2f5] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[500px]">
        <div className="flex-1 bg-[#004b93] p-8 flex flex-col justify-center text-white">
          <button
            onClick={handleBack}
            className="mb-4 text-sm text-gray-200 hover:text-white underline"
          >
            ← Back
          </button>
          <h2 className="text-3xl font-bold uppercase mb-8">Account Login</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Username" className="w-full bg-[#003870] p-3 rounded text-sm" />
            <input type="password" placeholder="Password" className="w-full bg-[#003870] p-3 rounded text-sm" />
            <button className="w-full bg-white text-black font-bold py-3 rounded-full hover:bg-gray-100">LOG IN</button>
          </form>
          <button onClick={() => navigate('/register')} className="mt-4 text-sm underline text-center">Register here</button>
        </div>
        <div className="hidden md:flex flex-1 bg-emerald-900 items-center justify-center text-white font-black text-5xl">SPORTS BOOK</div>
      </div>
    </div>
  );
}