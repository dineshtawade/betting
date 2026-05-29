import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.state?.idx > 0) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="min-h-screen w-full bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl bg-[#222222] shadow-2xl flex flex-col md:flex-row overflow-hidden min-h-[550px] rounded-lg">
        
        {/* Left Side - Registration Form */}
        <div className="flex-1 p-8">
          <button
            onClick={handleBack}
            className="mb-4 text-sm text-gray-400 hover:text-white underline"
          >
            ← Back
          </button>
          <h2 className="text-2xl font-bold mb-6 text-[#cca04c]">REGISTER</h2>
          <form className="space-y-4">
            <input 
              type="text" 
              placeholder="Username" 
              className="w-full bg-[#2a2a2a] p-3 border border-gray-700 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-[#cca04c] focus:ring-1 focus:ring-[#cca04c]"
            />
            <input 
              type="tel" 
              placeholder="Mobile Number" 
              className="w-full bg-[#2a2a2a] p-3 border border-gray-700 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-[#cca04c] focus:ring-1 focus:ring-[#cca04c]"
            />
            <input 
              type="password" 
              placeholder="Password" 
              className="w-full bg-[#2a2a2a] p-3 border border-gray-700 rounded text-white placeholder:text-gray-500 focus:outline-none focus:border-[#cca04c] focus:ring-1 focus:ring-[#cca04c]"
            />
            <button className="w-full bg-[#a60a27] hover:bg-[#8a0820] py-3 font-bold rounded transition duration-300 text-white">
              GET OTP
            </button>
          </form>
          <button 
            onClick={() => navigate('/login')} 
            className="w-full mt-4 text-sm text-gray-400 hover:text-[#cca04c] transition text-center"
          >
            Already have an account? Login
          </button>
        </div>

        {/* Right Side - Reddybook Information */}
        <div className="flex-1 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] p-8 flex flex-col justify-center overflow-y-auto">
          
          {/* Get Your Reddybook ID Section */}
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold mb-2">
               <span className="text-[#cca04c]"> Get Your Reddybook ID in Minutes</span> 
            </h2>
            <div className="w-16 h-1 bg-[#cca04c] mb-4"></div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              The initial stage in order to gain access to the platform is to create your Reddybook ID. 
              This ID is your individual entry point and enables you to access any features without limitations.
            </p>
          </div>

          {/* Registration Steps */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3 text-[#cca04c] flex items-center gap-2">
              <span className="w-6 h-6 bg-[#cca04c] text-gray-900 rounded-full flex items-center justify-center text-xs font-bold">1</span>
              Simple steps to get started:
            </h3>
            <ul className="space-y-2 ml-4">
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-[#cca04c]">→</span> Finish the fast registration procedure
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-[#cca04c]">→</span> Get your login details
              </li>
              <li className="flex items-center gap-2 text-gray-300">
                <span className="text-[#cca04c]">→</span> Log in to your account with reddybook
              </li>
            </ul>
          </div>

          {/* Benefits with Active ID */}
          <div className="mb-6 p-4 bg-[#1a1a2e] rounded-lg border border-[#cca04c]/30">
            <h3 className="text-md font-semibold mb-3 text-[#cca04c]">With an active ID, you will be able to:</h3>
            <div className="grid grid-cols-2 gap-2">
              {[
                "Control your account any time",
                "Deposit funds instantly",
                "Withdraw money smoothly",
                "Browse each feature of the platform"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1 text-gray-300 text-sm">
                  <span className="text-[#cca04c]">✓</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Easy for Beginners Note */}
          <div className="mb-6 p-3 bg-[#cca04c]/10 rounded-lg border border-[#cca04c]/20">
            <p className="text-sm text-gray-300 text-center">
              ✨ It is structured in a way that it is easy to use by beginners and even new users can start-off with ease. ✨
            </p>
          </div>

          {/* Reddybook Login Section */}
          <div className="mb-4">
            <h2 className="text-xl md:text-2xl font-bold mb-2">
              <span className="text-[#cca04c]">Reddybook Login – Fast, Secure & Reliable</span> 
            </h2>
            <div className="w-12 h-0.5 bg-[#cca04c] mb-3"></div>
            <p className="text-gray-300 text-sm leading-relaxed">
              The reddybook login procedure is designed to be fast and secure. They can log-in in a few seconds 
              and get access to their accounts without delays.
            </p>
          </div>

          {/* Login Steps */}
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2 text-[#cca04c]">Login steps:</h3>
            <ul className="space-y-1 ml-4">
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-[#cca04c]">1.</span> Type in your name or ID
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-[#cca04c]">2.</span> Enter your password
              </li>
              <li className="flex items-center gap-2 text-gray-300 text-sm">
                <span className="text-[#cca04c]">3.</span> Click on login
              </li>
            </ul>
          </div>

          {/* Post Login Benefits */}
          <div className="mb-4">
            <h3 className="text-md font-semibold mb-2 text-[#cca04c]">Once logged in, users can:</h3>
            <div className="grid grid-cols-2 gap-1">
              {[
                "Check account balance",
                "Add funds",
                "Withdraw money",
                "Easy navigation through all features"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-1 text-gray-300 text-sm">
                  <span className="text-green-400">✔</span> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Security Note */}
          <div className="mt-2 p-3 bg-red-900/30 rounded-lg border border-red-700/50">
            <p className="text-xs text-gray-300 leading-relaxed">
              <span className="font-bold text-[#cca04c]">🔒 Security Note:</span> The system is streamlined to offer real-time access to make the entire experience seamless and easy. 
              Always ensure that your login credentials are secure and not shared with others.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}