import React from "react";

function Register({ onSwitchToLogin }) {
  return (
    <div
      className="w-full flex flex-col items-center"
      style={{ backgroundImage: "url('/pexels-pixabay-268533.jpg')" }}
    >
      <div className="auth-card">
        <div className="auth-header">
          <h2 className="auth-title">Register</h2>
          <p className="auth-subtitle">Create your account below.</p>
        </div>
        <form className="w-full flex flex-col items-center space-y-4">
          <div className="form-group">
            <input
              className="form-input"
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="form-group">
            <input
              className="form-input"
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="form-group">
            <input
              className="form-input"
              type="password"
              placeholder="Confirm Password"
              className="w-full px-4 py-2 rounded bg-white/20 text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <button
            className="auth-button"
            type="submit"
            className="w-full py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
        <div className="auth-switch">
          <span className="auth-switch-text">Already have an account?</span>
          <button
            className="auth-switch-link"
            type="button"
            onClick={onSwitchToLogin}
            className="text-blue-300 hover:underline"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;
