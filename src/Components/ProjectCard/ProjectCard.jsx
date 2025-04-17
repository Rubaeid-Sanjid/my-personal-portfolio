import PropTypes from "prop-types";
import { motion } from "framer-motion"

const ProjectCard = ({ project }) => {
  return (
    <motion.div whileHover={{ scale: 1.1, transition: {duration: 0.8, ease: "easeInOut"} }} className="card bg-gradient-to-r from-[#b1caed] to-[#dbe3f7]">
      <figure>
        <img
          src={project.image}
          alt={project.name}
        />
      </figure>
      <div className="card-body text-slate-800">
        <h2 className="card-title text-2xl">{project.name}</h2>
        <p>{project.description}</p>
        <div className="card-actions justify-start my-4">
          {project.technologies.map((tech, index) => (
            <div key={index} className="badge badge-outline font-medium">
              {tech}
            </div>
          ))}
        </div>
        <div className="card-actions">
          <a
            href={project.projectLink}
            className="btn btn-sm bg-[#3f92f1] border-none text-white"
          >
            Live Site
          </a>
          <a
            href={project.repositoryLink}
            className="btn btn-sm bg-[#3f92f1] border-none text-white"
          >
            Client Repository
          </a>
          <a
            href={project.serverRepositoryLink}
            className="btn btn-sm bg-[#3f92f1] border-none text-white"
          >
            Server Repository
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
