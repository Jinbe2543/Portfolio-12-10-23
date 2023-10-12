import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "Bootcamp",
    title: "Generation Thailand",
    intern: "Bootcamp",
    duration: "Jul 2023 - Oct 2023",
    details:
      " Learned to create web applications from React as front-end, Node.js as back-end and MongoDB as a Database ",
  },
  {
    year: "Internship",
    title: "Thai Airways International Public Co., Ltd. ",
    intern: "Internship",
    duration: "Mar 2022 - Oct 2022 ",
    details:
      "  Maintenance and inspection of various points of the aircraft in Hangar asassigned and able to work under pressure.",
  },
  {
    year: "Internship",
    title: "Directorate of Communications and Electronics Royal Thai Air Force",
    intern: "Internship",
    duration: "Nov 2021 - Mar 2022",
    details:
      " Inspection and Maintenance of Transceiver and Receiver air signal equipment.",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16" data-aos="flip-up">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] pb-6">
        Experience
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          intern={item.intern}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
