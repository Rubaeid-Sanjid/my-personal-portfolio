import { useEffect, useState } from "react";
import ProjectCard from "../ProjectCard/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);

  console.log(projects.length);
  return (
    <div>
        <div className="divider bg-neutral-content h-[1px] w-1/2 mx-auto my-24"></div>
        <h2 className="text-neutral-content text-center text-4xl mb-5">Projects</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 container mx-auto px-3 lg:px-12 my-12">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project}></ProjectCard>
      ))}
    </div>
    </div>
  );
};

export default Projects;