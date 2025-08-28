import type { ProjectDetails } from "../mockData/projects";
import { motion } from "motion/react";

type ProjectsProps = {
  projects: ProjectDetails[];
  title?: string;
  sectionId?: string;
};

const Projects: React.FC<ProjectsProps> = ({ projects, title, sectionId }) => {
  return (
    <section className="container my-5" id={sectionId}>
      {title ? <h2 className="h4 mb-4">{title}</h2> : null}
      <div className="row g-3">
        {projects.map((project: ProjectDetails, idx: number) => (
          <div className="col-12 col-md-6 col-lg-4" key={project.id}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: idx * 0.3 }}
              className="card"
            >
              <div
                className="card-body d-flex flex-column"
                style={{ padding: 8 }}
              >
                <h5 className="card-title mb-1">{project.title}</h5>
                <p className="card-subtitle text-body-secondary mt-2 mb-3">
                  {project.company} • {project.location}
                </p>

                <div className="d-flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="badge text-bg-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <p className="text-muted small">
                    {project.startDate} — {project.endDate}
                  </p>
                  <ul className="list-group list-group-flush">
                    {project.tasks.map((task: string, i: number) => (
                      <li key={i} className="list-group-item mb-2">
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
