import heroImg from "../assets/hero.png";

function About() {
  return (
    <section
      id="about"
      className=" scroll-mt-[80px] min-h-screen bg-slate-950 text-white px-8 py-[60px]"
    >

      <div className="max-w-[1100px] mx-auto">


        {/* Title */}

        <div className="text-center mb-[35px]">

          <h2 className="text-[28px] font-bold">
            Get To Know <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 text-[14px] mt-[10px]">
            A passionate web developer creating modern,
            responsive and user-friendly applications.
          </p>

        </div>



        {/* Content */}

        <div className="flex flex-col lg:flex-row items-center gap-[50px]">


          {/* Image */}

          <div className="flex-1 flex justify-center">

            <div className="relative">

              <div className="
              absolute
              inset-0
              bg-cyan-400/20
              blur-[50px]
              rounded-full
              ">
              </div>


              <div className="
              relative
              p-[5px]
              rounded-[20px]
              bg-gradient-to-br
              from-cyan-400
              via-blue-500
              to-purple-500
              ">

               <div className="
                  bg-slate-900
                  rounded-[18px]
                  overflow-hidden
                  w-[300px]
                  h-[500px]
                  ">

                    <img
                      src={heroImg}
                      alt="Yongsy Din"
                      className="
                      w-full
                      h-full
                      object-cover
                      "
                    />

                  </div>

              </div>


            </div>

          </div>




          {/* Information */}

          <div className="flex-1">


            <h3 className="text-[20px] font-bold mb-[15px]">
              Web Developer
            </h3>



            <p className="text-gray-400 text-[14px] leading-7 mb-[15px]">

              I'm <span className="text-cyan-400 font-semibold">
                Yongsy Din
              </span>,
              a web developer student passionate about
              creating clean and responsive web applications.

            </p>



            <p className="text-gray-400 text-[14px] leading-7 mb-[25px]">

              I have experience with React.js, Vue.js,
              Tailwind CSS, Laravel, PHP, and MySQL.
              I enjoy learning technologies and building
              real-world projects.

            </p>




            {/* Personal Info */}

            <div className="grid grid-cols-2 gap-y-[15px] mb-[30px]">


              <div>
                <h4 className="text-cyan-400 text-[13px]">
                  Name
                </h4>
                <p className="text-gray-300 text-[13px]">
                  Yongsy Din
                </p>
              </div>


              <div>
                <h4 className="text-cyan-400 text-[13px]">
                  Role
                </h4>
                <p className="text-gray-300 text-[13px]">
                  Web Developer
                </p>
              </div>


              <div>
                <h4 className="text-cyan-400 text-[13px]">
                  Location
                </h4>
                <p className="text-gray-300 text-[13px]">
                  Cambodia
                </p>
              </div>


              <div>
                <h4 className="text-cyan-400 text-[13px]">
                  Education
                </h4>
                <p className="text-gray-300 text-[13px]">
                  Passerelles Numériques Cambodia
                </p>
              </div>


            </div>




            {/* Stats */}

            <div className="grid grid-cols-3 gap-[12px]">


              <div className="
              bg-slate-900
              border
              border-cyan-400/20
              rounded-[15px]
              p-[20px]
              text-center
              ">

                <h4 className="text-cyan-400 text-[24px] font-bold">
                  10+
                </h4>

                <p className="text-gray-400 text-[12px]">
                  Projects
                </p>

              </div>



              <div className="
              bg-slate-900
              border
              border-cyan-400/20
              rounded-[15px]
              p-[20px]
              text-center
              ">

                <h4 className="text-cyan-400 text-[24px] font-bold">
                  9+
                </h4>

                <p className="text-gray-400 text-[12px]">
                  Technologies
                </p>

              </div>



              <div className="
              bg-slate-900
              border
              border-cyan-400/20
              rounded-[15px]
              p-[20px]
              text-center
              ">

                <h4 className="text-cyan-400 text-[24px] font-bold">
                  3+
                </h4>

                <p className="text-gray-400 text-[12px]">
                  Years Learning
                </p>

              </div>


            </div>


          </div>


        </div>


      </div>

    </section>
  );
}

export default About;
