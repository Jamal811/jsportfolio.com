import React, { useState } from "react";

const Skills = () => {
  const [skills, setSkills] = useState([
    { id: 1, name: "HTML" },
    { id: 2, name: "CSS" },
    { id: 3, name: "JavaScript" },
    { id: 4, name: "Bootstrap" },
    { id: 5, name: "React" },
    { id: 6, name: "Material UI" },
    { id: 7, name: "MERN Stack" },
  ]);

  return (
    <section className="py-12">
      <h1 className="text-3xl mb-4 text-center  dark:text-white ">My Skills</h1>
      <div className="flex flex-wrap justify-center">
        {skills.map((skill) => (
          <div
            key={skill.id}
            className="p-4 m-4 bg-sky-500/100 rounded-lg shadow-md sm:text-1xl md:text-4xl"
            whileHover={{ scale: 1.1 }}
          >
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
