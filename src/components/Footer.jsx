import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
  FaArrowUp,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
     {
      name: "GitHub",
      url: "https://github.com/yongsy-17",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yongsy-din-815074345/",
      icon: <FaLinkedin />,
    },
    {
      name: "Telegram",
      url: "https://t.me/YO_NG_ZY",
      icon: <FaTelegramPlane />,
    },
  ];

  return (
    <footer className="bg-slate-950 border-t border-slate-800">

      <div className="max-w-[1100px] mx-auto px-[20px] py-[50px]">

        <div className="grid md:grid-cols-3 gap-[40px]">

          {/* Left */}

          <div>

            <h2 className="text-[24px] font-bold text-white">
              Yongsy
              <span className="text-cyan-400">.</span>
              <span className="text-cyan-400">Din</span>
            </h2>

            <p className="text-gray-400 text-[14px] leading-7 mt-[15px]">
              Passionate Web Developer dedicated to building
              modern, responsive, and user-friendly web applications.
            </p>

          </div>

          {/* Center */}

          <div>

            <h3 className="text-white text-[18px] font-semibold mb-[15px]">
              Quick Links
            </h3>

            <ul className="space-y-[10px]">

              <li><a href="#home" className="text-gray-400 hover:text-cyan-400 transition">Home</a></li>

              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition">About</a></li>

              <li><a href="#skills" className="text-gray-400 hover:text-cyan-400 transition">Skills</a></li>

              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition">Projects</a></li>

              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition">Contact</a></li>

            </ul>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-white text-[18px] font-semibold mb-[15px]">
              Connect
            </h3>

            <p className="text-gray-400 text-[14px]">
              Phnom Penh, Cambodia
            </p>

            <p className="text-gray-400 text-[14px] mt-[8px]">
              yongsy3010@gmail.com
            </p>

            <div className="flex gap-[12px] mt-[20px]">

              {socialLinks.map((item) => (

                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-[40px]
                  h-[40px]
                  rounded-full
                  bg-slate-900
                  border
                  border-slate-700
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:bg-cyan-400
                  hover:text-slate-950
                  hover:border-cyan-400
                  transition
                  duration-300
                  "
                >
                  {item.icon}
                </a>

              ))}

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="border-t border-slate-800 mt-[40px] pt-[20px] flex flex-col md:flex-row items-center justify-between">

          <p className="text-gray-500 text-[13px]">
            © {currentYear} Yongsy Din. All Rights Reserved.
          </p>

          <a
            href="#home"
            className="
            flex
            items-center
            gap-[8px]
            text-cyan-400
            text-[14px]
            mt-[15px]
            md:mt-0
            hover:text-cyan-300
            transition
            "
          >
            Back to Top
            <FaArrowUp />
          </a>

        </div>

      </div>

    </footer>
  );
}

export default Footer;