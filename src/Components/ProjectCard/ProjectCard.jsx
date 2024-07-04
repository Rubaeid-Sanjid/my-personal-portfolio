import PropTypes from "prop-types";
import { motion } from "framer-motion"

const ProjectCard = ({ project }) => {
  return (
    <motion.div whileHover={{ scale: 1.1, transition: {duration: 0.5, ease: "easeInOut"} }} className="card bg-gradient-to-r from-[#b1caed] to-[#dbe3f7]">
      {/* <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt=""
        />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title text-2xl">{project.name}</h2>
        <p>{project.description}</p>
        <div className="card-actions justify-start my-4">
          {project.technologies.map((tech, index) => (
            <div key={index} className="badge badge-outline font-medium">
              {tech}
            </div>
          ))}
        </div>
        <div className="card-actions justify-between">
          <a
            href={project.projectLink}
            className="btn btn-sm bg-[#6eaef7] border-none text-white"
          >
            Live Site
          </a>
          <a
            href={project.repositoryLink}
            className="btn btn-sm bg-[#6eaef7] border-none text-white"
          >
            GitHub Repository
          </a>
        </div>
      </div>
    </motion.div>
  );
};

ProjectCard.propTypes = {
  project: PropTypes.object,
};

export default ProjectCard;
