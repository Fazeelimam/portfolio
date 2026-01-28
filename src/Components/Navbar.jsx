import { FaLinkedin, FaGithub, FaSquareXTwitter, FaInstagram } from "react-icons/fa6";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6 px-4">
      {/* ✅ Left: Logo or Brand Name */}
      <div className="flex items-center text-white text-2xl font-bold tracking-wide">
        {/* You can replace with <img src={logo} alt="Logo" className="h-10" /> */}
        Fazeel.dev
      </div>

      {/* ✅ Right: Social Media Links */}
      <div className="flex items-center gap-6 text-2xl text-white">
        <a href="https://linkedin.com/in/fazeel-b88412277" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="hover:text-cyan-400 transition" />
        </a>
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <FaGithub className="hover:text-cyan-400 transition" />
        </a>
        <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <FaSquareXTwitter className="hover:text-cyan-400 transition" />
        </a>
        <a href="https://instagram.com/yourhandle" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="hover:text-cyan-400 transition" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
