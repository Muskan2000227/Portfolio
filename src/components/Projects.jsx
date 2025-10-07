import { RiExternalLinkLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "HealthCare Expert System",
      github: "https://github.com/Muskan2000227/Healthcare-Expert-System",
      description: [
        "Developed a full-stack health application featuring a CNN-based lung cancer detector (92% precision), Decision Tree disease classification, SARIMAX health trend forecasting, and an interactive chatbot that reduced user query response time by 40%, delivering instant recommendations with 90%+ accuracy."
      ],
      technologies: [
        "Python",
        "Django",
        "JavaScript",
        "jQuery",
        "Bootstrap",
        "MySQL",
        "Machine Learning"
      ]
    },
    {
      title: "Image Tool Website",
      github: "https://github.com/Muskan2000227/Image-Tools-Website",
      description: 
        "Built a browser-based image editing tool with 15+ image manipulation functions (filters, transformations, color adjustments).Optimized backend processing with OpenCV and Pillow to handle images up to 15MB efficiently."
      ,
      technologies: [
        "Python",
        "Django",
        "OpenCV",
        "Pillow",
        "NumPy",
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "MySQL"
      ]
    },
    {
      title: "Admission Cell Slot Booking System",
      github: "https://github.com/Muskan2000227/slot_booking",
      description: 
        "Developed a dynamic slot booking system between students and teachers for admission counseling sessions, implementing booking constraints, real-time teacher availability, email confirmations, and an admin panel for slot and faculty management."
      ,
      technologies: ["Python", "Django", "HTML", "CSS", "JavaScript", "SQLite"]
    }
  ];

  return (
    <div className="mt-10 text-[16px]">
       <h2 className="text-2xl font-semibold mb-3 border-b pb-2 font-sans transition-all duration-300 hover:tracking-wider">
       Projects
      </h2>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="relative border-l-4 border-gray-300 pl-6 py-4 transition-all duration-500 group hover:border-gray-700 hover:pl-8"
          >
            {/* Decorative dot */}
            <div className="absolute left-[-10px] top-6 w-4 h-4 bg-white border-2 border-gray-300 rounded-full transition-all duration-500 group-hover:border-gray-700 group-hover:bg-gray-700 group-hover:scale-125"></div>
            
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
              <div className="flex-1">
                <p className="text-[18px] tracking-[0.05em] font-serif font-semibold transition-all duration-300 group-hover:tracking-[0.1em] group-hover:text-gray-700">
                  {project.title}
                </p>
              </div>
              
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-wrap w-fit items-center gap-2 text-[14px] font-medium text-gray-600 hover:text-gray-900 transition-all duration-300 hover:gap-3 border border-gray-300 px-3 py-1.5 rounded-full hover:border-gray-700 hover:shadow-md group/link"
              >
                <FaGithub className="text-[16px] transition-transform duration-300 group-hover/link:rotate-[360deg]" />
                <span className="hidden sm:inline">View Code</span>
                <RiExternalLinkLine className="text-[14px] transition-transform duration-300 group-hover/link:translate-x-1" />
              </a>
            </div>

            <div className="mt-3 text-[14px] leading-relaxed text-gray-600 transition-all duration-300 group-hover:text-gray-800">
              {project.description}
            </div>
            
            <div className="flex flex-wrap gap-2 mt-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="text-[11px] font-medium border border-gray-300 text-gray-600 px-3 py-1.5 rounded-full transition-all duration-300 hover:scale-105 hover:bg-gray-800 hover:text-white hover:border-gray-800 hover:shadow-md cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;