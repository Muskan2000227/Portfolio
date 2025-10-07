import { Chrono } from "react-chrono";

const EducationDetails = [
  {
    title: "Aug 2021 – June 2025",
    cardTitle: "Amritsar Group of Colleges, Amritsar",
    cardSubtitle: "B.Tech CSE",
    cardDetailedText: "CGPA: 9.04/10",
  },
  {
    title: "March 2020 – Feb 2021",
    cardTitle: "SSSS Khalsa Senior Secondary School",
    cardSubtitle: "Senior Secondary",
    cardDetailedText: "Percentage: 93%",
  },
  {
    title: "March 2019 – Feb 2020",
    cardTitle: "Vishav Public School",
    cardSubtitle: "High School",
    cardDetailedText: "Percentage: 93%",
  },
];

const Education= () => {
  return (
    <div className="w-full mx-auto mt-10">
     <h2 className="text-2xl font-semibold mb-3 border-b pb-2 font-sans transition-all duration-300 hover:tracking-wider">
       Education
      </h2>
      <div className="mt-2 chrono-container ">
        <Chrono
          items={EducationDetails}
          mode="VERTICAL_ALTERNATING"
          hideControls
          disableToolbar
          cardHeight={120}
          cardWidth={600}
          theme={{
            primary: "#364153",
            secondary: "#f3f4f6",
            cardBgColor: "#ffffff",
            cardForeColor: "#000000",
            titleColor: "#000000",
          }}
        />
      </div>

      <style jsx>{`
        .chrono-container * {
          color: black !important; /* Force all text inside Chrono to be black */
        }

        /* Target each card */
.chrono-card {
  transition: all 0.3s ease;
}

/* Apply hover effect per card */
.chrono-card:hover {
  transform: scale(1.03);
  letter-spacing: 0.5px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  background-color: #f9fafb !important; /* subtle gray hover */
}

      `}</style>
    </div>
  );
};

export default Education;