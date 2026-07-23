import project1 from "../assets/music.png";
import project2 from "../assets/dailyneed.png";
import project3 from "../assets/air-quality.png";

function Projects() {
  const projects = [
    {
      id: "01",
      title: "Music Player App",
      description:
        "Discover and play your favorite music with a sleek and intuitive interface.",
      image: project1,
      tags: ["JavaScript", "CSS", "HTML"],
      View_Project: "https://github.com/sonarykheang123/Music-Player-App-G6",
      
    },
    {
      id: "02",
      title: "E-commerce System ",
      description:
        "A full-stack e-commerce system built with React, Laravel, and MySQL, featuring user authentication, product management, and a shopping cart.",
      image: project2,
      tags: ["CSS", "Javascript", "MySQL","PHP"],
      View_Project: "https://github.com/OEUBROCHOM/VC1-G9-Daily-Needs",
    },
    {
      id: "03",
      title: "Air Quality Dashboard",
      description:
        "Real-time air quality monitoring and visualization application.",
      image: project3,
      tags: ["Vue.js", "Firebase", "Tailwind"],
      View_Project: "https://github.com/radytrainer/air-quality-dashboard",
      
    },
    
  ];

  return (
    <section
      id="projects"
      className="scroll-mt-[80px] bg-slate-950 py-[60px]"
    >
      <div className="max-w-[1100px] mx-auto px-[20px]">

        {/* Title */}

        <div className="text-center mb-[40px]">

          <p className="text-cyan-400 text-[12px] font-semibold uppercase tracking-[2px]">
            Featured Work
          </p>

          <h2 className="text-[28px] font-bold text-white mt-[8px]">
            My Recent Projects
          </h2>

          <p className="text-gray-400 text-[13px] mt-[8px]">
            Some projects I have built during my learning journey.
          </p>

        </div>

        {/* Projects */}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[18px] items-stretch">

        {projects.map((project) => (

          <div
            key={project.id}
            className="
            bg-slate-900
            border
            border-slate-800
            rounded-[14px]
            overflow-hidden
            group
            hover:border-cyan-400
            transition
            duration-300
            flex
            flex-col
            h-full
            "
          >

            {/* Image */}

            <div className="overflow-hidden">

              <img
                src={project.image}
                alt={project.title}
                className="
                w-full
                h-[170px]
                object-cover
                group-hover:scale-105
                duration-500
                "
              />

            </div>

            {/* Content */}

            <div className="p-[16px] flex flex-col flex-1">

              <p className="text-cyan-400 text-[18px] font-bold">
                {project.id}
              </p>

              <h3 className="text-[20px] font-bold text-white mt-[8px]">
                {project.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-[13px] leading-5 mt-[8px] flex-1">
                {project.description}
              </p>

              {/* Tags */}

              <div className="flex flex-wrap gap-[6px] mt-[14px]">

                {project.tags.map((tag) => (

                  <span
                    key={tag}
                    className="
                    px-[10px]
                    py-[4px]
                    rounded-full
                    bg-slate-800
                    text-gray-300
                    text-[11px]
                    "
                  >
                    {tag}
                  </span>

                ))}

              </div>

              {/* View Project */}

             <div className="mt-auto pt-[20px] flex justify-end">

                <a
                  href={project.View_Project}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  inline-flex
                  items-center
                  gap-[6px]
                  text-cyan-400
                  text-[14px]
                  font-semibold
                  hover:text-cyan-300
                  transition
                  "
                >
                  View Project
                  <span className="group-hover:translate-x-[4px] transition-transform duration-300">
                    →
                  </span>
                </a>

              </div>

            </div>

          </div>

        ))}

      </div>
        

      </div>
    </section>
  );
}

export default Projects;