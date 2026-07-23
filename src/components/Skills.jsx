import { motion } from "framer-motion";

import {
  FaCode,
  FaServer,
  FaTools,
} from "react-icons/fa";

import html from "../assets/html.png";
import css from "../assets/css.svg";
import javascript from "../assets/javascript.png";
import react from "../assets/react.png";
import vue from "../assets/vue.png";
import tailwind from "../assets/tailwind.png";
import laravel from "../assets/laravel.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";

function Skills() {
  const skills = [
    { name: "HTML", image: html },
    { name: "CSS", image: css },
    { name: "JavaScript", image: javascript },
    { name: "React", image: react },
    { name: "Vue.js", image: vue },
    { name: "Tailwind", image: tailwind },
    { name: "Laravel", image: laravel },
    { name: "PHP", image: php },
    { name: "MySQL", image: mysql },
  ];

  const categories = [
    {
      icon: <FaCode />,
      title: "Frontend",
      description:
        "HTML, CSS, JavaScript, React.js, Vue.js, Tailwind CSS",
    },
    {
      icon: <FaServer />,
      title: "Backend",
      description:
        "PHP, Laravel, MySQL, REST APIs",
    },
    {
      icon: <FaTools />,
      title: "Tools",
      description:
        "Git, GitHub, VS Code, Postman, Figma",
    },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-[80px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-[70px]"
    >
      <div className="max-w-[1100px] mx-auto px-[20px]">

        {/* Title */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-[45px]"
        >
          <p className="text-cyan-400 text-[12px] font-semibold uppercase tracking-[3px]">
            My Skills
          </p>

          <h2 className="text-[28px] font-bold text-white mt-[8px]">
            Technologies I Use
          </h2>

          <p className="text-gray-400 text-[13px] mt-[8px]">
            Technologies and tools I use to build modern web applications.
          </p>
        </motion.div>

        {/* Technology Cards */}

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[18px]">

          {skills.map((skill, index) => (

            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -8,
                scale: 1.05,
              }}
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-[16px]
              p-[20px]
              flex
              flex-col
              items-center
              justify-center
              cursor-pointer
              hover:border-cyan-400
              hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]
              transition-all
              "
            >

              <img
                src={skill.image}
                alt={skill.name}
                className="w-[55px] h-[55px] object-contain"
              />

              <h3 className="text-white text-[14px] font-semibold mt-[15px]">
                {skill.name}
              </h3>

            </motion.div>

          ))}

        </div>

        {/* Categories */}

        <div className="grid md:grid-cols-3 gap-[18px] mt-[45px]">

          {categories.map((item, index) => (

            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -8,
              }}
              className="
              bg-slate-900
              border
              border-slate-800
              rounded-[16px]
              p-[22px]
              text-center
              hover:border-cyan-400
              hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]
              transition-all
              "
            >

              <div className="flex justify-center text-cyan-400 text-[34px] mb-[15px]">
                {item.icon}
              </div>

              <h3 className="text-white text-[20px] font-bold">
                {item.title}
              </h3>

              <p className="text-gray-400 text-[13px] leading-6 mt-[10px]">
                {item.description}
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;