const About = () => {
  return (
    <div className="container mx-auto px-3 lg:px-12 text-neutral-content">
        <div className="divider bg-neutral-content h-[1px] lg:w-1/2 w-3/4 mx-auto my-12"></div>
      <h2 className="text-4xl font-semibold mb-10 text-center">About Me</h2>
      <p className="text-lg mb-4">
        Hello, I'm <span className="font-bold">Rubaeid Sanjid</span>, a passionate junior
        web developer with over 6 months of experience in building dynamic and
        responsive websites.
      </p>
      <p className="text-lg mb-4">
        Currently, I'm studying Computer Science and Engineering at{' '}
        <a href="https://www.aiub.edu/" className="font-bold">American International University-Bangladesh (AIUB).</a>
      </p>
      <p className="text-lg mb-4">
        In addition to my studies, I am constantly
        exploring new technologies. I'm particularly
        interested in MERN stack development and Full-stack development.      </p>
      <p className="text-lg mb-4">
        Outside of my personal work, I enjoy traveling, gossiping with friends and family, and playing games. These hobbies help me stay creative and energized.
      </p>
      <p className="text-lg mb-4">
        My mission is to create user-friendly, accessible, and visually
        appealing web applications that make a positive impact on users' lives.
      </p>

      <p className="text-lg">
        Feel free to{" "}
        <a href="#contact" className="text-blue-500 font-bold">
          contact me
        </a>{" "}
        or connect with me on{" "}
        <a
          href="https://www.linkedin.com/in/rubaeid-sanjid-03553a226/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 font-bold"
        >
          LinkedIn
        </a>
        !
      </p>
    </div>
  );
};

export default About;
