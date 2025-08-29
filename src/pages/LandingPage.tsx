import { Container, Col, Row, Card } from "react-bootstrap";
import { motion } from "motion/react";

const LandingPage: React.FC = () => {
  return (
    <Container className="justify-content-center text-center py-5 font-monospace">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <Row className="justify-content-center mb-4">
          <Col md={8}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fs-3 text-primary fw-bold">
                  Education
                </Card.Title>
                <Card.Text className="fs-6">
                  <div className="fw-bold">University of Houston</div>
                  <div className="fst-italic">
                    B.S. Computer Science
                    <br />
                    August 2021 - 2026
                  </div>
                  GPA: 3.7
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4">
          <Col md={4}>
            <Card className="shadow-sm h-200">
              <Card.Body>
                <Card.Title className="fs-4 text-info fw-bold">
                  Card 1
                </Card.Title>
                <Card.Text className="fs-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nunc ut laoreet cursus, enim erat dictum urna, nec
                  dictum velit enim euismod enim.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="shadow-sm h-200">
              <Card.Body>
                <Card.Title className="fs-4 text-info fw-bold">
                  Card 2
                </Card.Title>
                <Card.Text className="fs-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nunc ut laoreet cursus, enim erat dictum urna, nec
                  dictum velit enim euismod enim.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="justify-content-center mb-4 ">
          <Col md={8}>
            <Card className="shadow-sm h-100">
              <Card.Body>
                <Card.Title className="fs-3 text-primary">Lorem</Card.Title>
                <Card.Text className="fs-6 text-center">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod, nunc ut laoreet cursus, enim erat dictum urna, nec
                  dictum velit enim euismod enim.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};
export default LandingPage;
