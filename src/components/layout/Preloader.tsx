import { useEffect, useState } from "react";
import veritasLogo from "@/assets/veritas-logo.jpg";

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Check if all resources are loaded
    const handleLoad = () => {
      // Add a minimum display time for better UX
      setTimeout(() => {
        setFadeOut(true);
        // Remove preloader after fade animation
        setTimeout(() => setLoading(false), 800);
      }, 500);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-primary transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center space-y-6">
        {/* Logo Container with Pulse Animation */}
        <div className="relative">
          <div className="absolute inset-0 bg-gold/20 rounded-full blur-2xl animate-pulse" />
          <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-gold animate-spin-slow">
            <img
              src={veritasLogo}
              alt="Veritas Logo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Loading Text */}
        <div className="text-center space-y-2">
          <h2 className="text-2xl md:text-3xl font-bold text-white animate-fade-in">
            Veritas
          </h2>
          <p className="text-gold text-sm md:text-base animate-fade-in">
            Loading Excellence...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="w-48 md:w-64 h-1 bg-primary-foreground/20 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-gold to-white animate-progress" />
        </div>
      </div>
    </div>
  );
};

export default Preloader;
