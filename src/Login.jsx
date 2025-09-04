import React from "react";

function Login({ onSwitchToRegister }) {
  return (
    <div className="auth-card">
      <div className="auth-header">
        <h2 className="auth-title">Login</h2>
        <p className="auth-subtitle">Welcome back! Please login.</p>
      </div>
      <form>
        <div className="form-group">
          <input
            className="form-input"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group">
          <input
            className="form-input"
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          className="auth-button"
          type="submit"
        >
          Login
        </button>
      </form>
      <div className="auth-switch">
        <span className="auth-switch-text">Don't have an account?</span>
        <button
          className="auth-switch-link"
          type="button"
          onClick={onSwitchToRegister}
        >
          Register
        </button>
      </div>
    </div>
  );
}

export default Login;
