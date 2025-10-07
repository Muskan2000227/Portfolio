import { BsLink45Deg } from "react-icons/bs";

const Header = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-4 sm:p-6 w-full">
      
      {/* Left Section: Image + Name */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-center">
        
        {/* Profile Image */}
        <div>
          <img
            src="MuskanSaini.jpeg"
            alt="Muskan Saini"
            className="rounded-full h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] transition-transform duration-500 hover:scale-110 hover:shadow-2xl object-cover"
          />
        </div>

        {/* Name & Title */}
        <div className="text-center sm:text-left mt-2 sm:mt-0">
          <p className="text-xl sm:text-2xl font-semibold tracking-[0.1em] sm:tracking-[0.12em] font-serif transition-all duration-300 hover:tracking-[0.15em] hover:text-gray-700">
            Muskan Saini
          </p>

          <p className="text-gray-500 text-[14px] sm:text-[16px] font-light font-mono transition-all duration-300 hover:translate-x-1 hover:text-gray-600">
            Software Engineer | Python Developer
          </p>
        </div>
      </div>

      {/* Right Section: Resume Link */}
      <div className="flex items-center gap-2 text-gray-500 font-medium cursor-pointer group mt-4 sm:mt-0">
        <a
          href="https://drive.google.com/file/d/1lYd16a32U5t5setz3_MQikR-CfG8cn4b/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 sm:gap-2 transition-all duration-300 group-hover:gap-3 hover:text-dark text-[14px]"
        >
          <p className="text-base sm:text-lg transition-all duration-300 group-hover:translate-x-2 group-hover:font-semibold  ">
            Resume
          </p>
          <div className="text-xl transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-125">
            <BsLink45Deg />
          </div>
        </a>
      </div>

      {/* Optional Animations */}
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.3) rotate(-180deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px) translateY(-20px); }
          to { opacity: 1; transform: translateX(0) translateY(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px) scale(0.8); }
          to { opacity: 1; transform: translateX(0) scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Header;
