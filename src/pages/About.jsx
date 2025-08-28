import React from "react";
import { experiences, skills } from "../constants";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Cta from "../components/Cta";


const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Mandar
        </span>
      </h1>

      {/* <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in India, specializing in technical education
          through hands-on learning and building applications.
        </p>
      </div> */}
      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in India, specializing in technical education
          through hands-on learning and building applications.
        </p>

        {/* Social Links */}
        <div className="flex gap-5 mt-2">
          <a
            href="https://github.com/DMandar8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-500 hover:text-black border border-black rounded-lg p-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.94c.58.1.79-.25.79-.56v-2c-3.26.71-3.95-1.57-3.95-1.57-.52-1.32-1.26-1.67-1.26-1.67-1.03-.7.08-.69.08-.69 1.14.08 1.73 1.17 1.73 1.17 1.01 1.74 2.65 1.24 3.3.95.1-.73.39-1.24.71-1.53-2.61-.3-5.35-1.3-5.35-5.77 0-1.28.46-2.32 1.17-3.14-.12-.3-.51-1.52.11-3.16 0 0 .98-.31 3.2 1.18a11 11 0 015.83 0c2.22-1.49 3.2-1.18 3.2-1.18.62 1.64.23 2.86.11 3.16.72.82 1.17 1.86 1.17 3.14 0 4.48-2.74 5.47-5.36 5.76.4.34.75 1.01.75 2.04v3.02c0 .31.21.66.8.55A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
            </svg>
            My GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/mandardeshmukh8"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-blue-500 hover:text-blue-800 border border-black hover:border-blue-800 p-3 rounded-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zm7.5 0h3.6v2.2h.05c.5-.95 1.7-2 3.5-2 3.7 0 4.4 2.4 4.4 5.4V24h-4v-7.7c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 1.9-2.9 3.9V24h-4V8z" />
            </svg>
            My LinkedIn
          </a>
        </div>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20">
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center ">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">My Journey</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            From the excitement of writing my first line of code to architecting full-stack applications used in the real world, my journey has been a relentless pursuit of growth—driven by passion, fueled by challenges, and shaped by a deep commitment to mastering the craft of software development.<br/>
            My journey reflects a steady path of learning, experimenting, and building meaningful digital solutions.
          </p>
        </div>

        <div className="mt-12 flex ">

          <VerticalTimeline>

            {experiences.map((experience)=>(
              <VerticalTimelineElement key={experience.company_name} date={experience.date} icon={<div className="flex justify-center items-center w-full h-full">
                <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain"/>
              </div>} contentStyle={{borderBottom: '8px', borderStyle: 'solid', borderBottomColor: experience.iconBg, boxShadow: 'none'}} iconStyle={{background: experience.iconBg}}>
                <div >
                  <h3 className="text-black text-xl font-poppins font-semibold ">
                    {experience.title}
                  </h3>
                  <p className="text-black-500 font-medium font-base" style={{margin: 0}}>
                    {experience.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-y-2">

                  {experience.points.map((point,index)=>(
                    <li key={`experience-point-${index}`} className="text-black-500/50 font-normal pl-1 text-sm ">
                      {point}
                    </li>
                  ))}

                </ul>
              </VerticalTimelineElement>
            ))}

          </VerticalTimeline>

        </div>

      </div>

      <hr  className="border-slate-200" />
      <Cta/>
    </section>
  );
};

export default About;
