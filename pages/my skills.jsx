import React, { useState } from "react";
import { motion } from "framer-motion";

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
          <motion.div
            key={skill.id}
            className="p-4 m-4 bg-white rounded-lg shadow-md"
            whileHover={{ scale: 1.1 }}
          >
            {skill.name}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
