import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer footer-center text-neutral-content rounded p-10">
      <div className="divider bg-neutral-content h-[1px] w-3/4 lg:w-1/2"></div>
      <nav className="grid grid-flow-col gap-4">
        <a href="#about" className="link link-hover">About me</a>
        <a href="#contact" className="link link-hover">Contact</a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/rubaeid-sanjid/"
            target="_blank"
          >
            <FaLinkedin className="text-3xl" />
          </a>
          <a href="https://github.com/Rubaeid-Sanjid" target="_blank">
            <FaGithub className="text-3xl" />
          </a>
          <a href="https://www.facebook.com/Piyal.24/" target="_blank">
            <FaFacebook className="text-3xl" />
          </a>
          <a href="https://www.instagram.com/p_for_piyal_/" target="_blank">
            <FaInstagram className="text-3xl" />
          </a>
          <a href="https://www.x.com/SkPiyal" target="_blank">
            <FaTwitter className="text-3xl" />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by Rubaeid
          Sanjid
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
