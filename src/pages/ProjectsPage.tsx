import React from "react";
import Projects from "../components/Projects";
import {
  ReactProjects,
  JavaProjects,
  SwiftProjects,
} from "../mockData/projects";
import { motion } from "motion/react";
import { Container, Row, Col } from "react-bootstrap";

const ProjectsPage: React.FC = () => {
  return (
    <Container style={{ paddingTop: "1rem" }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1 className="text text-primary">Projects</h1>
          </Col>
        </Row>
        <Row className="justify-content-md-center">
          <Col md="auto">
            <Projects projects={ReactProjects} language="React" />
          </Col>
          <Col md="auto">
            <Projects projects={JavaProjects} language="Java" />
          </Col>
          <Col md="auto">
            <Projects projects={SwiftProjects} language="Swift" />
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default ProjectsPage;
