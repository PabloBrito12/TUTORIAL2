import React from "react";

export default function Login() {
  return (
    <div>
      <h1 className="text-4xl text-center text-white font-bold mb-8">Login</h1>
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
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-white">
            <input type="checkbox" className="mr-2" />
            Remember me
          </label>
          <a href="#" className="text-blue-400 hover:underline text-sm">Forgot password?</a>
        </div>
        <button 
          type="submit" 
          className="w-full bg-white text-slate-800 font-bold py-2 rounded hover:bg-gray-200 transition"
        >
          Login
        </button>
      </form>
      <div className="mt-6 text-center">
        <span className="text-white">New Here? </span>
        <a href="#" className="text-blue-400 hover:underline">Create an Account</a>
      </div>
    </div>
  );
}
