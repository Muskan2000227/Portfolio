const SkillBox = ({ name, icon }) => {
  return (
    <div className="border border-gray-300 rounded-md px-2 py-1 flex gap-2 items-center hover:scale-105 grayscale hover:grayscale-0 shadow hover:drop-shadow-xl/25 hover:skew-2 ">
      <div className="hover:scale-110 hover:-skew-3">{icon}</div>
      <div className="font-semibold">{name}</div>
    </div>
  );
};

export default SkillBox;