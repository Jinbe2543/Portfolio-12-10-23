import React from "react";
import ProjectsItem from "./ProjectsItem";
import colmar from "../assets/picture/colmar.png"
import findyourhat from "../assets/picture/find-your-hat.png"
import projectactivity from "../assets/picture/project-activity.png"
import reactass from "../assets/picture/react-assessment.png"

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16" data-aos="flip-down">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
      <p className="text-center py-8">
        {/* Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius at nulla
        hic explicabo expedita suscipit voluptatibus ea officiis harum saepe
        sequi, doloribus aliquid, repellat quae commodi? Explicabo inventore
        fugiat molestiae! */}
      </p>
      <div className="grid sm:grid-cols-2 gap-12" >
        <ProjectsItem img={colmar} title='Colma' des='HTML CSS' link='https://colmar-kappa.vercel.app/' />
        <ProjectsItem img={findyourhat} title='Find-your-hat' des='Javascript' link='https://replit.com/@wuthiphathrutht/64-find-your-hat' />
        <ProjectsItem img={reactass} title='React-assessment' des='React Tailwind' link='https://wuttipat-react64.vercel.app/' />
        <ProjectsItem img={projectactivity} title='Project-activity' des='React Tailwind Node.js MongoDB' link='/' />
        {/* <ProjectsItem /> */}
      </div>
    </div>
  );
};

export default Projects;
