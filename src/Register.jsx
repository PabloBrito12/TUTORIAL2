import React from "react";

export default function Register() {
  return (
    <div>
      <h1 className="text-4xl text-center text-white font-bold mb-8">Register</h1>
      <form>
        <div className="mb-4">
          <label htmlFor="email" className="block text-white mb-2">Your Email</label>
          <input 
            type="email" 
            id="email" 
            className="w-full bg-slate-700 text-white py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your email" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-white mb-2">Password</label>
          <input 
            type="password" 
            id="password" 
            className="w-full bg-slate-700 text-white py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Enter your password" 
          />
        </div>
        <div className="mb-4">
          <label htmlFor="confirm" className="block text-white mb-2">Confirm Password</label>
          <input 
            type="password" 
            id="confirm" 
            className="w-full bg-slate-700 text-white py-2 px-3 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" 
            placeholder="Confirm your password" 
          />
        </div>
        <button 
          type="submit" 
          className="w-full bg-white text-slate-800 font-bold py-2 rounded hover:bg-gray-200 transition"
        >
          Register
        </button>
      </form>
      <div className="mt-6 text-center">
        <span className="text-white">Already have an account? </span>
        <a href="#" className="text-blue-400 hover:underline">Login</a>
      </div>
    </div>
  );
}
