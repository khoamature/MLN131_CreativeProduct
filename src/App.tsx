import React, { useState, useEffect } from "react";
import LandingPage from "./components/LandingPage";
import BoardGame from "./components/BoardGame";
import { BookOpen, Gamepad2 } from "lucide-react";

function App() {
  const [activeSection, setActiveSection] = useState<"theory" | "game">(
    "theory"
  );
  const [scrolled, setScrolled] = useState(false);

  // Disable DevTools (only on desktop, not mobile)
  useEffect(() => {
    // Check if device is mobile
    const isMobile =
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      );

    // Skip all protections on mobile devices
    if (isMobile) {
      return;
    }

    // Disable right-click (desktop only)
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      return false;
    };

    // Disable F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U (desktop only)
    const handleKeyDown = (e: KeyboardEvent) => {
      // F12
      if (e.key === "F12") {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+I (DevTools)
      if (e.ctrlKey && e.shiftKey && e.key === "I") {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+J (Console)
      if (e.ctrlKey && e.shiftKey && e.key === "J") {
        e.preventDefault();
        return false;
      }
      // Ctrl+Shift+C (Inspect Element)
      if (e.ctrlKey && e.shiftKey && e.key === "C") {
        e.preventDefault();
        return false;
      }
      // Ctrl+U (View Source)
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        return false;
      }
    };

    // Detect DevTools (desktop only)
    const detectDevTools = () => {
      const threshold = 160;
      const widthThreshold = window.outerWidth - window.innerWidth > threshold;
      const heightThreshold =
        window.outerHeight - window.innerHeight > threshold;

      if (widthThreshold || heightThreshold) {
        document.body.innerHTML =
          '<div style="display:flex;align-items:center;justify-content:center;height:100vh;font-family:Arial;font-size:24px;color:#8b6f47;">⚠️ Developer tools are disabled</div>';
      }
    };

    // Add event listeners
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);

    // Check for DevTools periodically
    const devToolsInterval = setInterval(detectDevTools, 1000);

    // Cleanup
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      clearInterval(devToolsInterval);
    };
  }, []);

  // Detect scroll for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          activeSection === "game" || scrolled
            ? "bg-white/95 backdrop-blur-md shadow-lg py-2 sm:py-3"
            : "bg-transparent py-3 sm:py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div
                className={`w-8 h-8 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center transition-all ${
                  activeSection === "game" || scrolled
                    ? "bg-gradient-to-br from-[#8b6f47] to-[#a0826d]"
                    : "bg-white/20 backdrop-blur-sm"
                }`}
              >
                <BookOpen className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
              </div>
              <div>
                <span
                  className={`text-base sm:text-xl font-bold tracking-wide transition-colors ${
                    activeSection === "game" || scrolled
                      ? "text-[#8b6f47]"
                      : "text-white"
                  }`}
                >
                  Triết Học{" "}
                  <span
                    className={
                      activeSection === "game" || scrolled
                        ? "text-amber-600"
                        : "text-amber-200"
                    }
                  >
                    MLN131
                  </span>
                </span>
                <p
                  className={`text-[10px] sm:text-xs transition-colors ${
                    activeSection === "game" || scrolled
                      ? "text-gray-500"
                      : "text-white/70"
                  }`}
                >
                  Chương VI - Vấn đề Tôn giáo
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div
              className={`flex items-center rounded-full p-0.5 sm:p-1 transition-all ${
                activeSection === "game" || scrolled
                  ? "bg-gray-100"
                  : "bg-white/10 backdrop-blur-sm"
              }`}
            >
              <button
                onClick={() => setActiveSection("theory")}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-5 py-1.5 sm:py-2.5 rounded-full font-medium transition-all text-sm sm:text-base ${
                  activeSection === "theory"
                    ? scrolled
                      ? "bg-[#8b6f47] text-white shadow-md"
                      : "bg-white text-[#8b6f47] shadow-md"
                    : activeSection === "game" || scrolled
                    ? "text-gray-600 hover:text-[#8b6f47]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <BookOpen className="w-4 h-4" />
                <span className="hidden sm:inline">Lý Thuyết</span>
              </button>
              <button
                onClick={() => setActiveSection("game")}
                className={`flex items-center space-x-1 sm:space-x-2 px-2 sm:px-5 py-1.5 sm:py-2.5 rounded-full font-medium transition-all text-sm sm:text-base ${
                  activeSection === "game"
                    ? "bg-[#8b6f47] text-white shadow-md"
                    : scrolled
                    ? "text-gray-600 hover:text-[#8b6f47]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                <Gamepad2 className="w-4 h-4" />
                <span className="hidden sm:inline">Board Game</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content Sections */}
      {activeSection === "theory" ? <LandingPage /> : <BoardGame />}
    </div>
  );
}

export default App;
