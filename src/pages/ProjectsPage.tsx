import React from "react";
import Projects from "../components/Projects";
import {
  ReactProjects,
  JavaProjects,
  SwiftProjects,
} from "../mockData/projects";
import { motion } from "motion/react";
import { Container, Row, Col } from "react-bootstrap";

const LandingPage: React.FC = () => {
  return (
    <Container>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1 className="text text-primary">Projects</h1>
          </Col>
        </Row>
        <Row>
          <Projects projects={ReactProjects} language="React" />
        </Row>
        <Row>
          <Projects projects={JavaProjects} language="Java" />
        </Row>
        <Row>
          <Projects projects={SwiftProjects} language="Swift" />
        </Row>
      </motion.div>
    </Container>
  );
};

export default LandingPage;
