import type { ProjectDetails } from "../mockData/projects";
import {
  Container,
  Row,
  Col,
  Accordion,
  useAccordionButton,
  Card,
  Badge,
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
          <Row className="py-3 justify-content-md-center">
            {projects.map((project) => (
              <Col
                key={project.title}
                className="col-md-4 col-auto"
                xs="auto"
                g={3}
              >
                <Card className="shadow-sm">
                  <Card.Body>
                    <Card.Title className="text-primary text-center">
                      {project.title}
                    </Card.Title>
                    <Row
                      gap={1}
                      className="mb-2 justify-content-md-center font-monospace"
                    >
                      {project.technologies.map((tech) => (
                        <Col key={tech} xs="auto">
                          <Badge bg="info">{tech}</Badge>
                        </Col>
                      ))}
                    </Row>
                    <Row className="text-center">
                      <Row>
                        <Card.Subtitle className="mb-1 fs-7 fw-bolder font-monospace">
                          {project.company}
                        </Card.Subtitle>
                      </Row>
                      <Row>
                        <Card.Text className="mb-2 fs-10 fst-italic">
                          <small>{project.location}</small>
                        </Card.Text>
                      </Row>
                      <Row>
                        <Card.Text className="mb-1 fs-10 font-monospace">
                          <small>
                            {project.startDate}—{project.endDate}
                          </small>
                        </Card.Text>
                      </Row>
                      <Row>
                        <Col>
                          {project.tasks.map((task) => (
                            <Card.Text className="p-3 m-0 pb-0 pt-1 font-monospace">
                              <Row>•{task}</Row>
                            </Card.Text>
                          ))}
                        </Col>
                      </Row>
                    </Row>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Accordion.Collapse>
      </Accordion>
    </Container>
  );
};

export default Projects;
