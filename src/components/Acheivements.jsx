

const Acheivements = () => {
const achievings = [
  {
    title: "GSSoC’25 Contributor",
    description: "Contributed to 6+ open-source projects, improving coding and collaboration skills."
  },
  {
    title: "HackerRank SQL 4-Star",
    description: "Achieved 4-star rating by solving advanced SQL challenges efficiently."
  },
  {
    title: "NPTEL SWAYAM – Introduction to IoT",
    description: "Completed the course to gain practical understanding of IoT concepts and applications."
  },
  {
    title: "NPTEL SWAYAM – Business Intelligence",
    description: "Learned BI tools and data analytics for effective business decision-making."
  }
];



  return (
    <div className='mt-10'>
        <h2 className="text-2xl font-semibold mb-3 border-b pb-2 font-sans transition-all duration-300 hover:tracking-wider">
       Achievements
      </h2>
      <div>
        {achievings.map((achieve,index)=>(
            <div key={index} className='mt-4'>
                <div className='hover:-translate-y-0.5'>
                <div className='font-semibold text-[16px] mb-1 font-mono'>{achieve.title}</div>
                <div className='text-[14px] text-grey1 text-justify'>{achieve.description}</div>
                </div>
            </div>

        ))}
      </div>
        </div>

  )
}

export default Acheivements