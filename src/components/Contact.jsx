import {
  FaGithub,
  FaLinkedin,
  FaTelegramPlane,
} from "react-icons/fa";

function Contact() {
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
    <section
      id="contact"
      className="scroll-mt-[80px] bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 py-[50px]"
    >
      <div className="max-w-[500px] mx-auto px-[20px]">
        <div className="text-center mb-[25px]">
          <h2 className="text-[28px] font-bold text-white">
            Let's <span className="text-cyan-400">Work Together</span>
          </h2>

          <p className="text-gray-400 text-[13px] mt-[8px]">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-700 rounded-[16px] p-[20px] text-center">
          <h3 className="text-[20px] font-bold text-white">
            Contact Information
          </h3>

          <p className="text-gray-400 text-[13px] mt-[8px]">
            Feel free to reach out through email or social media.
          </p>

          <div className="mt-[20px]">
            <p className="text-gray-500 text-[12px]">Email</p>

            <a
              href="mailto:yongsy3010@gmail.com"
              className="text-cyan-400 text-[15px] font-semibold hover:text-cyan-300"
            >
              yongsy3010@gmail.com
            </a>
          </div>

          <div className="mt-[15px]">
            <p className="text-gray-500 text-[12px]">Phone</p>

            <a
              href="tel:+85577696564"
              className="text-cyan-400 text-[15px] font-semibold hover:text-cyan-300"
            >
              +855 77696564
            </a>
          </div>

          <button className="mt-[25px] px-[25px] py-[10px] rounded-[10px] bg-cyan-400 text-slate-900 text-[14px] font-semibold hover:bg-cyan-300 transition">
            Get In Touch
          </button>

          <div className="mt-[25px] pt-[20px] border-t border-slate-700">
            <p className="text-gray-400 text-[13px] mb-[15px]">
              Follow Me
            </p>

            <div className="flex justify-center gap-[10px]">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-[36px] h-[36px] rounded-[10px] bg-slate-800 border border-slate-700 flex items-center justify-center text-[16px] text-white hover:bg-cyan-400 hover:text-slate-900 transition"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;