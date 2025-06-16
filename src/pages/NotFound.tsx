
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center section-bg">
      <div className="text-center glass-effect p-8 rounded-lg border border-emerald-400/30">
        <h1 className="text-4xl font-bold mb-4 neon-text font-orbitron">404</h1>
        <p className="text-xl text-emerald-200 mb-4 font-orbitron">Oops! Page not found</p>
        <a href="/" className="text-emerald-400 hover:text-emerald-300 underline font-orbitron transition-colors">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
