import SkillBox from "./SkillBox";

const Skill = () => {
  const Languages = [
    { name: "Python", icon: <img className="w-[30px] h-[30px]" src="Python.svg" alt="" /> },
    { name: "C++", icon: <img className="w-[30px] h-[30px]" src="cpp.svg" alt="" /> },
    { name: "JavaScript", icon: <img className="w-[30px] h-[30px]" src="Javascript.svg" alt="" /> },
    { name: "SQL", icon: <img className="w-[30px] h-[30px]" src="sql.svg" alt="" /> },
  ];

  const Frameworks = [
    { name: "Django", icon: <img className="w-[30px] h-[30px]" src="django.svg" alt="" /> },
    { name: "React.js", icon: <img className="w-[30px] h-[30px]" src="react-svgrepo-com.svg" alt="" /> },
    { name: "FastApi", icon: <img className="w-[30px] h-[30px]" src="Fastapi.svg" alt="" /> },
    { name: "Tailwind CSS", icon: <img className="w-[30px] h-[30px]" src="Tailwind CSS.svg" alt="" /> },
    { name: "BootStrap", icon: <img className="w-[30px] h-[30px]" src="Bootstrap.svg" alt="" /> },
  ];

  const Databases = [
    { name: "MySQL", icon: <img className="w-[30px] h-[30px]" src="MySQL.png" alt="" /> },
    { name: "SQLite", icon: <img className="w-[30px] h-[30px]" src="Sqlite.svg" alt="" /> },
    { name: "PostgreSQL", icon: <img className="w-[30px] h-[30px]" src="Postgresql.svg" alt="" /> },
  ];

  const Others = [
    { name: "Git", icon: <img className="w-[30px] h-[30px]" src="git-svgrepo-com.svg" alt="" /> },
    { name: "GitHub", icon: <img className="w-[30px] h-[30px]" src="Github.svg" alt="" /> },
    { name: "Postman", icon: <img className="w-[30px] h-[30px]" src="postman-icon-svgrepo-com.svg" alt="" /> },
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-semibold mb-3 border-b pb-2 font-sans transition-all duration-300 hover:tracking-wider">
        Skills
      </h2>
      <div className="flex flex-col">
        {/* languages  */}
        <div className="flex flex-wrap gap-2 hover:cursor-pointer mt-3 ">
          {Languages.map((val) => (
            <SkillBox key={val.name} name={val.name} icon={val.icon} />
          ))}
        </div>
        {/* frameworks  */}
        <div className="flex flex-wrap gap-2 hover:cursor-pointer mt-3 ">
          {Frameworks.map((val) => (
            <SkillBox key={val.name} name={val.name} icon={val.icon} />
          ))}
        </div>
        {/* databases  */}
        <div className="flex flex-wrap gap-2 hover:cursor-pointer mt-3 ">
          {Databases.map((val) => (
            <SkillBox key={val.name} name={val.name} icon={val.icon} />
          ))}
        </div>
        {/* others  */}
        <div className="flex flex-wrap gap-2 hover:cursor-pointer mt-3 ">
          {Others.map((val) => (
            <SkillBox key={val.name} name={val.name} icon={val.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
