import { useState, useEffect } from "react";

const Loader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
        <div className="text-center" style={{ animation: 'fadeIn 0.6s ease-out' }}>
          <div style={{ animation: 'scaleRotate 0.8s ease-out' }}>
            <img 
              src="MuskanSaini.jpeg" 
              alt="Muskan Saini" 
              width={100}   
              className='rounded-full h-[100px] mx-auto shadow-2xl'
            />
          </div>

          <div className='mt-6' style={{ animation: 'slideUp 0.8s ease-out 0.3s both' }}>
            <p className='text-3xl font-[600] tracking-[0.15em] font-serif'>
              Muskan Saini
            </p>

            <p className='text-grey1 text-[20px] font-[300] font-mono mt-2'>
              Software Engineer | Python Developer
            </p>
          </div>

          <div className="mt-8" style={{ animation: 'fadeIn 1s ease-out 0.6s both' }}>
            <div className="flex justify-center gap-1">
              <div className="w-2 h-2 bg-gray-800 rounded-full" style={{ animation: 'bounce 1s infinite' }}></div>
              <div className="w-2 h-2 bg-gray-800 rounded-full" style={{ animation: 'bounce 1s infinite 0.2s' }}></div>
              <div className="w-2 h-2 bg-gray-800 rounded-full" style={{ animation: 'bounce 1s infinite 0.4s' }}></div>
            </div>
          </div>
        </div>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @keyframes scaleRotate {
            from {
              opacity: 0;
              transform: scale(0.5) rotate(-180deg);
            }
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            50% {
              transform: translateY(-10px);
            }
          }
        `}</style>
      </div>
    );
  }

  return <div style={{ animation: 'fadeIn 0.5s ease-out' }}>{children}</div>;
};

export default Loader;