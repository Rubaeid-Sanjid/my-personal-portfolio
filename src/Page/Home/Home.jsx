import profileImg from "../../assets/images/Sanjid.jpg";
const Home = () => {
  return (
    
    <div className="hero min-h-screen ">
      <div className="flex justify-center items-center px-3 lg:px-24 gap-6">
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Hi, I'm Rubaeid Sanjid</h1>
          <p className="py-6">
            I'm a Junior Web Developer. I specialize in creating full-stack web
            applications using Tailwind CSS, JavaScript, React and Node JS. I'm
            always eager to learn and take on new challenges.
          </p>
          <button className="btn btn-primary">Contact Me</button>
        </div>
        <div className="flex-1 max-w-sm">
          <img src={profileImg} className="rounded-lg shadow-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Home;
