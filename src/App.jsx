import Login from "./Login";
import Register from "./Register";
import { useState } from "react";

function App() {
  const [view, setView] = useState("login");

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Imagen de fondo */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/pexels-pixabay-268533.jpg')" }}
      ></div>
      
      {/* Overlay oscuro opcional */}
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      
      {/* Contenido centrado */}
      <div className="relative z-10 h-full flex items-center justify-center p-4">
        <div className="bg-slate-800 bg-opacity-90 border border-slate-400 rounded-md p-8 shadow-lg backdrop-blur-sm max-w-md w-full">
          {view === "login" ? <Login /> : <Register />}
          <div className="mt-6 flex justify-center space-x-4">
            <button
              className={`px-4 py-2 rounded transition ${
                view === "login" 
                  ? "bg-blue-600 text-white" 
                  : "bg-slate-600 text-gray-300 hover:bg-slate-500"
              }`}
              onClick={() => setView("login")}
            >
              Login
            </button>
            <button
              className={`px-4 py-2 rounded transition ${
                view === "register" 
                  ? "bg-blue-600 text-white" 
                  : "bg-slate-600 text-gray-300 hover:bg-slate-500"
              }`}
              onClick={() => setView("register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
