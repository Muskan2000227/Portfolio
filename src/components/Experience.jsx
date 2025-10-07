
const Experience = () => {
  const experiences = [
    {
      title: "Data Science Intern",
      company: "Sabudh Foundation",
      location: "Remote",
      duration: "July 2024 – Dec 2024",
      achievements: [
        "Ranked among the Top 5 Performers out of 200+ Interns for delivering high-impact AI solutions.",
        "Engineered a high-fidelity Text-to-Speech (TTS) system using FastSpeech and HiFi-GAN, achieving real-time voice synthesis from text, PDF, and Word inputs.",
        "Enabled speech generation with support for both male and female voices, enhancing accessibility.",
        "Designed a user-friendly interface allowing text entry and file uploads (PDF, DOCX) for speech conversion.",
        "Deployed the solution on Streamlit, enabling seamless real-time audio output with minimal latency."
      ],
      technologies: [
        "Python",
        "FastSpeech",
        "HiFi-GAN",
        "Streamlit",
        "Machine Learning",
        "AI"
      ]
    }
  ];

  return (
    <div className="mt-7">
      <h2 className="text-2xl font-semibold mb-5 border-b pb-2 font-sans transition-all duration-300 hover:tracking-wider">
        Experience
      </h2>

      {experiences.map((exp, index) => (
        <div 
          key={index} 
          className="mb-8 text-[16px] group transition-all duration-300 hover:translate-x-2"
        >
          {/* Flex container responsive */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-col sm:flex-row sm:items-center">
              <h3 className="text-[16px] sm:text-[17px] font-[600] font-serif transition-all duration-300 group-hover:text-gray-700">
                {exp.company}
              </h3>
              <p className="text-[14px] sm:text-[15px] text-grey1 font-mono transition-all duration-300 group-hover:text-gray-600 mt-1 sm:mt-0 sm:ml-3">
                • {exp.title}
              </p>
            </div>
            <span className="text-sm sm:text-[14px] transition-all duration-300 group-hover:font-semibold mt-2 sm:mt-0">
              {exp.duration}
            </span>
          </div>

          <ul className="list-disc list-inside mt-3 space-y-1 text-grey1 text-[14px] sm:text-[14px]">
            {exp.achievements.map((achieve, i) => (
              <li 
                key={i} 
                className="transition-all duration-300 hover:text-gray-700"
              >
                {achieve}
              </li>
            ))}
          </ul>

          {/* Technologies responsive */}
          <div className="flex flex-wrap gap-2 mt-4">
            {exp.technologies.map((tech, i) => (
              <span
                key={i}
                className="text-[11px] sm:text-[12px] font-medium border border-gray-300 text-gray-600 px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white hover:border-gray-800 hover:shadow-md cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
