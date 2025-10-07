import { useState, useEffect, useRef } from "react";

const Footer = () => {
  const names = [
    "MUSKAN SAINI",
     "ਮੁਸਕਾਨ ਸੈਨੀ",       // Punjabi
    "मुस्कान सैनी",        // Hindi
    "মুসকান সাইনী",        // Bengali
    "મુસ્કાન સૈની",       // Gujarati
    "ಮಸ್ಕಾನ್ ಸೈನೀ",        // Kannada
    "മുസ്കാൻ സൈനി",       // Malayalam
    "ముస్కాన్ సైని",        // Telugu
    "முச்கான் சைனி",        // Tamil
    "穆斯坎·赛尼",           // Chinese
    "ムスカン・サイニ",      // Japanese
    "무스칸 사이니"          // Korean
  ];

  const [currentName, setCurrentName] = useState("MUSKAN SAINI");
  const [hasAnimated, setHasAnimated] = useState(false); // ensures animation happens once
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            // Start rotation when element comes into view
            let i = 0;
            const interval = setInterval(() => {
              setCurrentName(names[i]);
              i++;
              if (i >= names.length) {
                clearInterval(interval);
                setCurrentName("MUSKAN SAINI"); // stop at English
                setHasAnimated(true);
              }
            }, 200);
          }
        });
      },
      { threshold: 0.5 } // triggers when 50% of element is visible
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated, names]);

  return (
    <div
      ref={ref}
      className="text-7xl sm:whitespace-nowrap text-center uppercase cursor-pointer mt-10 mb-5 transition-all duration-200 ease-in-out"
      style={{
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
        color: "transparent",
        backgroundImage: "linear-gradient(rgb(0, 0, 0), rgb(255, 255, 255))",
      }}
    >
      {currentName}
    </div>
  );
};

export default Footer;
