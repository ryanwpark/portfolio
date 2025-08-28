import {
  reactProjects,
  SwiftProjects,
  JavaProjects,
} from "../mockData/projects";
import type { ProjectDetails } from "../mockData/projects";
import { motion } from "motion/react";

const Projects: React.FC = () => {
  return (
    <section className="container my-5">
      <div className="row g-3">
        {reactProjects.map((project: ProjectDetails, idx: number) => (
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

                {/* Technologies (horizontal) */}
                <div className="d-flex flex-wrap gap-1 mb-3">
                  {project.technologies.map((tech: string) => (
                    <span key={tech} className="badge text-bg-secondary">
                      {tech}
                    </span>
                  ))}
                </div>
                {/* Bottom section pinned to bottom */}
                <div className="mt-auto">
                  <p className="text-muted small">
                    {project.startDate} — {project.endDate}
                  </p>
                  {/* Tasks (vertical) */}
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
