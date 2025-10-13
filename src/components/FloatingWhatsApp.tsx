import { useState, useEffect, useRef } from "react";
import whatsappIcon from "@/assets/whatsapp.svg";

const FloatingWhatsApp = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipIndex, setTooltipIndex] = useState(0);
  const [hasInteracted, setHasInteracted] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const initialPos = useRef({ x: 0, y: 0 });

  const tooltipMessages = [
    "💬 Chat with us on WhatsApp",
    "👋 We're online now — say hello!",
    "💡 Need help? Message us anytime!"
  ];

  useEffect(() => {
    // Check localStorage for interaction flag
    const interacted = localStorage.getItem("whatsapp-interacted");
    if (interacted) {
      setHasInteracted(true);
    }

    // Set initial position (bottom-right)
    const updatePosition = () => {
      setPosition({
        x: window.innerWidth - 80,
        y: window.innerHeight - 80
      });
    };
    updatePosition();
    window.addEventListener("resize", updatePosition);

    // Show tooltip on load if not interacted
    if (!interacted) {
      setTimeout(() => setShowTooltip(true), 1000);
      setTimeout(() => setShowTooltip(false), 6000);

      // Reappear after 3 minutes
      const tooltipTimer = setTimeout(() => {
        if (!localStorage.getItem("whatsapp-interacted")) {
          setShowTooltip(true);
          setTimeout(() => setShowTooltip(false), 5000);
        }
      }, 180000);

      return () => {
        window.removeEventListener("resize", updatePosition);
        clearTimeout(tooltipTimer);
      };
    }

    return () => window.removeEventListener("resize", updatePosition);
  }, []);

  // Rotate tooltip messages
  useEffect(() => {
    if (showTooltip && !hasInteracted) {
      const interval = setInterval(() => {
        setTooltipIndex((prev) => (prev + 1) % tooltipMessages.length);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [showTooltip, hasInteracted]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    dragStartPos.current = { x: e.clientX, y: e.clientY };
    initialPos.current = { ...position };
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    const touch = e.touches[0];
    dragStartPos.current = { x: touch.clientX, y: touch.clientY };
    initialPos.current = { ...position };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    const deltaX = e.clientX - dragStartPos.current.x;
    const deltaY = e.clientY - dragStartPos.current.y;
    
    setPosition({
      x: Math.max(0, Math.min(window.innerWidth - 60, initialPos.current.x + deltaX)),
      y: Math.max(0, Math.min(window.innerHeight - 60, initialPos.current.y + deltaY))
    });
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    const deltaX = touch.clientX - dragStartPos.current.x;
    const deltaY = touch.clientY - dragStartPos.current.y;
    
    setPosition({
      x: Math.max(0, Math.min(window.innerWidth - 60, initialPos.current.x + deltaX)),
      y: Math.max(0, Math.min(window.innerHeight - 60, initialPos.current.y + deltaY))
    });
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleEnd);
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleEnd);
    }
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleEnd);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleEnd);
    };
  }, [isDragging]);

  const handleClick = () => {
    if (!isDragging) {
      localStorage.setItem("whatsapp-interacted", "true");
      setHasInteracted(true);
      setShowTooltip(false);
      window.open("https://wa.me/256705466283", "_blank");
    }
  };

  return (
    <>
      <div
        ref={buttonRef}
        className="fixed cursor-move select-none"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          zIndex: 9999,
          touchAction: "none"
        }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onClick={handleClick}
      >
        <div className="relative">
          <div className="w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-110 active:scale-95">
            <img src={whatsappIcon} alt="WhatsApp" className="w-8 h-8" />
          </div>
          
          {showTooltip && !hasInteracted && (
            <div className="absolute right-16 top-1/2 -translate-y-1/2 whitespace-nowrap bg-background border-2 border-primary/60 text-foreground px-4 py-2 rounded-lg shadow-lg animate-fade-in pointer-events-none">
              <div className="absolute right-[-8px] top-1/2 -translate-y-1/2 w-0 h-0 border-t-8 border-t-transparent border-b-8 border-b-transparent border-l-8 border-l-primary/60"></div>
              {tooltipMessages[tooltipIndex]}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default FloatingWhatsApp;
