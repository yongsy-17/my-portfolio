function Header() {
  return (
    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      bg-slate-950/90
      backdrop-blur-md
      border-b
      border-slate-800
      "
    >
      <div
        className="
        max-w-[1200px]
        mx-auto
        px-[20px]
        h-[70px]
        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}

        <a
          href="#home"
          className="
          text-[24px]
          font-bold
          text-white
          "
        >
          Yongsy
          <span className="text-cyan-400">
            .DIN
          </span>
        </a>

        {/* Navigation */}

        <nav
          className="
          hidden
          md:flex
          items-center
          gap-[30px]
          "
        >
          <a
            href="#home"
            className="
            text-[14px]
            text-gray-300
            hover:text-cyan-400
            transition
            "
          >
            Home
          </a>

          <a
            href="#about"
            className="
            text-[14px]
            text-gray-300
            hover:text-cyan-400
            transition
            "
          >
            About
          </a>

          <a
            href="#skills"
            className="
            text-[14px]
            text-gray-300
            hover:text-cyan-400
            transition
            "
          >
            Skills
          </a>

          <a
            href="#projects"
            className="
            text-[14px]
            text-gray-300
            hover:text-cyan-400
            transition
            "
          >
            Projects
          </a>

          <a
            href="#contact"
            className="
            text-[14px]
            text-gray-300
            hover:text-cyan-400
            transition
            "
          >
            Contact
          </a>
        </nav>

        {/* Button */}

        <a
          href="#contact"
          className="
          hidden
          md:flex
          items-center
          justify-center
          bg-cyan-400
          text-slate-950
          px-[20px]
          py-[10px]
          rounded-[10px]
          text-[14px]
          font-semibold
          hover:bg-cyan-300
          transition
          "
        >
          Hire Me
        </a>
      </div>
    </header>
  );
}

export default Header;