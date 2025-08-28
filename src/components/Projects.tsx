import type { ProjectDetails } from "../mockData/projects";
import {
  Container,
  Row,
  Col,
  Accordion,
  useAccordionButton,
} from "react-bootstrap";

type ProjectProps = {
  projects: ProjectDetails[];
  language: string;
};

function CustomToggle({
  eventKey,
  children,
}: {
  eventKey: string;
  children: React.ReactNode;
}) {
  const onClick = useAccordionButton(eventKey);
  return (
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: "rgb(137, 207, 240)" }}
      className="rounded-pill py-2 px-3 border-0"
    >
      {children}
    </button>
  );
}

const Projects: React.FC<ProjectProps> = ({ projects, language }) => {
  return (
    <Container>
      <Accordion flush>
        <Row xs="auto" className="py-3 justify-content-md-center">
          <CustomToggle eventKey="0">{language}</CustomToggle>
        </Row>
        <Accordion.Collapse eventKey="0">
          <Row className="py-3 justify-content-md-center" xs="auto">
            {projects.map((project) => (
              <Col key={project.title} className="col-md-4 col-auto px-5">
                <div className="card">{project.title}</div>
              </Col>
            ))}
          </Row>
        </Accordion.Collapse>
      </Accordion>
    </Container>
  );
};

export default Projects;
