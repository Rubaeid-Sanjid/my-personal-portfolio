import profileImg from "../../assets/images/Sanjid.jpg";

const Banner = () => {
  return (
    <div className="hero min-h-screen text-neutral-content my-12">
      <div className="flex justify-center items-center px-3 lg:px-24 gap-6">
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#7bdaeb] to-[#00BFFF] text-transparent bg-clip-text">
              Rubaeid Sanjid
            </span>
          </h1>
          <p className="py-6">
            I'm a Junior Web Developer. I specialize in creating full-stack web
            applications using Tailwind CSS, JavaScript, React and Node JS. I'm
            always eager to learn and take on new challenges.
          </p>
          <button className="btn bg-gradient-to-r from-[#3672b6] to-[#00BFFF] border-none text-white text-lg uppercase">
            Contact Me
          </button>
        </div>
        <div className="flex-1 max-w-sm">
          <img
            src={profileImg}
            className="rounded-lg shadow-lg shadow-neutral-content"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;