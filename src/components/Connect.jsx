import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { RiTwitterXLine, RiArrowUpSLine } from "react-icons/ri";

const Connect = () => {
  const [open, setOpen] = useState(false); // toggle state for tablet/mobile

  const links = [
    { href: "mailto:sainimuskan731@gmail.com", icon: FiMail, hoverColor: "hover:text-blue-600" },
    { href: "https://www.linkedin.com/in/muskan--saini/", icon: FaLinkedin, hoverColor: "hover:text-blue-700" },
    { href: "https://github.com/Muskan2000227", icon: FaGithub, hoverColor: "hover:text-gray-900" },
    { href: "https://x.com/saini_muskan_27", icon: RiTwitterXLine, hoverColor: "hover:text-blue-500" }
  ];

  return (
    <>
      {/* Desktop view (large screens) */}
      <div className="hidden lg:flex fixed bottom-8 right-12 flex-col space-y-7 z-[100]">
        {links.map((link, index) => {
          const Icon = link.icon;
          return (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`text-3xl text-gray-800 ${link.hoverColor} transition-all duration-300 transform hover:scale-125 hover:rotate-12`}
              style={{ animation: `slideIn 0.6s ease-out ${index * 0.15}s both` }}
            >
              <Icon className="drop-shadow-md" />
            </a>
          );
        })}
      </div>

      {/* Mobile / Tablet view */}
      <div className="lg:hidden fixed bottom-5 right-5 flex flex-col items-center z-[100]">
        {/* Expanded icons */}
        {open && (
          <div className="flex flex-col space-y-4 mb-3 items-center">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-3xl text-gray-800 ${link.hoverColor} transition-all duration-300 transform hover:scale-125 hover:rotate-12`}
                >
                  <Icon className="drop-shadow-md" />
                </a>
              );
            })}
          </div>
        )}

        {/* Toggle button (pen/arrow) */}
        <button
          onClick={() => setOpen(!open)}
          className="bg-gray-800 text-white p-3 rounded-full shadow-lg text-2xl hover:bg-gray-700 transition-all"
        >
          {open ? <RiArrowUpSLine /> : "✎"} 
        </button>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(30px) translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0) translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default Connect;
