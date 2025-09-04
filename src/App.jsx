import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import "./App.css";

function App() {
  const [currentView, setCurrentView] = useState("login");

  return (
    <div className="app">
      <div className="container">
        <div className="auth-wrapper">
          {currentView === "login" ? (
            <Login onSwitchToRegister={() => setCurrentView("register")} />
          ) : (
            <Register onSwitchToLogin={() => setCurrentView("login")} />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
