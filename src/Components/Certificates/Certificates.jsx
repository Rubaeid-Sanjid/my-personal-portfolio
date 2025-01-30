import Marquee from "react-fast-marquee";

const Certificates = () => {
  const achievements = [
    {
      title: "Complete Web Development Course",
      image:
        "https://i.postimg.cc/D0JJrhKb/Certificate-of-Complete-Web-Development-Course-With-Jhankar-Mahbub.jpg",
      link: "#",
    },
    {
      title: "MySQL Tutorial",
      image: "https://i.postimg.cc/dVLS6XXD/My-SQL-Tutorial.jpg",
      link: "https://www.mygreatlearning.com/certificate/YOSSLYNA",
    },
    {
      title: "Presentation Public Speaking",
      image:
        "https://i.postimg.cc/R0Dy9GzN/Certificate-of-Presentation-Public-Speaking.jpg",
      link: "https://10minuteschool.com/certificate/671e4995149b7/",
    },
    {
      title: "Higher Secondary Certificate (HSC)",
      image: "https://i.postimg.cc/mDgNrGBw/HSC-Certificate.jpg",
      link: "#",
    },
    {
      title: "Secondary School Certificate (SSC)",
      image: "https://i.postimg.cc/WpynRfD3/SSC-Certification.jpg",
      link: "#",
    },
    {
      title: "Dean’s Award",
      image: "https://i.postimg.cc/4yjbzmCt/Deans-Award.jpg",
      link: "#",
    },
  ];

  return (
    <section id="certifications" className="py-10 px-5 text-neutral-content">
      <div className="max-w-7xl mx-auto">
        <div className="divider bg-neutral-content h-[1px] lg:w-1/2 w-3/4 mx-auto my-12"></div>
        <h2 className="text-neutral-content font-semibold text-center text-4xl mb-8">
          Certifications and Achievements
        </h2>

        <Marquee pauseOnHover>
          <div className="flex gap-6 overflow-hidden">
            <div></div>
            {achievements.map((achievement, index) => (
              <a
                key={index}
                href={achievement.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-800 rounded-lg shadow-lg p-4 transform transition hover:scale-105 w-64"
              >
                <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg">
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover group-hover:opacity-90"
                  />
                </div>
                <h3 className="text-center text-lg font-semibold mt-3 group-hover:text-blue-400">
                  {achievement.title}
                </h3>
              </a>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Certificates;
