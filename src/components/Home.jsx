import heroImg from "../assets/download.png";
import { FaDownload } from "react-icons/fa";

function Home() {
  return (
    <section id="home" className="scroll-mt-[80px] relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute -top-40 -left-40 w-[450px] h-[450px] rounded-full bg-cyan-500/20 blur-3xl"></div>

      <div className="p-[8px] min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-[100px] items-center w-full">

          <div className="space-y-[20px] p-[120px]">
            <span className="inline-block px-[14px] py-[7px] rounded-full border border-cyan-400/40 bg-cyan-400/10 text-cyan-300 text-[13px]">👋 Welcome to my Portfolio</span>

            <h2 className="text-gray-400 text-[18px] ">Hello, I'm</h2>

            <h1 className="text-[48px] font-bold">Yongsy <span className="text-cyan-400">Din</span></h1>

            <h3 className="text-[26px] font-semibold text-gray-300">Web Developer</h3>

            <p className="max-w-[500px] text-gray-400 text-[14px] leading-7 pt-[10px]">
              I create responsive and user-friendly web applications using React.js, Vue.js, Laravel, PHP, JavaScript, Tailwind CSS, and MySQL.
            </p>

            <div className="flex gap-[18px] ">
              <button
                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                className="bg-cyan-400 text-slate-950 px-[24px] py-[11px] rounded-[12px] text-[14px] font-semibold hover:bg-cyan-300 transition duration-300"
              >
                View Projects
              </button>

              <a
                href="/yongsy_din CV .pdf"
                download
                className="inline-flex items-center gap-[8px] border border-cyan-400 text-cyan-400 px-[24px] py-[11px] rounded-[12px] text-[14px] hover:bg-cyan-400 hover:text-slate-950 transition duration-300"
              >
                <FaDownload />
                Download CV
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-400/30 blur-3xl rounded-full"></div>

              <div className="relative p-[10px] rounded-full border-4 border-cyan-400">
                <img src={heroImg} alt="Yongsy Din" className="w-[380px] h-[380px] rounded-full object-cover" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Home;