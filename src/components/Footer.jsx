import { useState, useEffect, useRef } from "react";

const Footer = () => {
  const names = [
    "MUSKAN SAINI",
    "ਮੁਸਕਾਨ ਸੈਨੀ",
    "मुस्कान सैनी",
    "মুসকান সাইনী",
    "મુસ્કાન સૈની",
    "ಮಸ್ಕಾನ್ ಸೈನೀ",
    "മുസ്കാൻ സൈനി",
    "ముస్కాన్ సైని",
    "முச்கான் சைனி",
    "穆斯坎·赛尼",
    "ムスカン・サイニ",
    "무스칸 사이니"
  ];

  const [currentName, setCurrentName] = useState(names[0]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [fade, setFade] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    let timeout;
    let observer;

    const animateNames = async () => {
      for (let i = 0; i < names.length; i++) {
        setFade(true);
        await new Promise((res) => setTimeout(res, 200)); // fade out
        setCurrentName(names[i]);
        setFade(false);
        await new Promise((res) => setTimeout(res, 300)); // fade in
      }
      setCurrentName("MUSKAN SAINI");
      setHasAnimated(true);
    };

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            animateNames();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
      clearTimeout(timeout);
      observer && observer.disconnect();
    };
  }, [hasAnimated]);

  return (
    <div
  ref={ref}
  onMouseEnter={() => setHasAnimated(false)}
  className={`text-5xl sm:text-7xl text-center uppercase cursor-pointer mt-10 mb-5 transition-all duration-500 ease-in-out ${
    fade ? "opacity-0" : "opacity-100"
  } overflow-hidden`}
  style={{
    backgroundClip: "text",
    WebkitTextFillColor: "transparent",
    color: "transparent",
    backgroundImage: "linear-gradient(rgb(0, 0, 0), rgb(255, 255, 255))",
    height: "6rem",        // fixed height (adjust based on font size)
    lineHeight: "3rem",    // ensure text is vertically centered
    minHeight: "6rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",   // prevents wrapping
  }}
>
  {currentName}
</div>

  );
};

export default Footer;
