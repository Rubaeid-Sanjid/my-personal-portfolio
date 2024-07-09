import resume from "../../../src/assets/resume/Rubaeid_Sanjid_Resume.pdf";

const Navbar = () => {
  const navlink = (
    <>
      <a className="text-xl mx-2 cursor-pointer" href="#about">About</a>
      <a className="text-xl mx-2 cursor-pointer" href="#skills">Skills</a>
      <a className="text-xl mx-2 cursor-pointer" href="#projects">Projects</a>
    </>
  );
  return (
    <div className="navbar text-neutral-content px-3 lg:px-24 my-6">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn px-0 lg:px-1 btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navlink}
          </ul>
        </div>
        <a className="btn pl-1 btn-ghost text-2xl lg:text-3xl">Portfolio</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navlink}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn bg-gradient-to-r from-[#3672b6] to-[#00BFFF] border-none text-white uppercase btn-sm lg:btn-md" href={resume} download>Download Resume</a>
      </div>
    </div>
  );
};

export default Navbar;
