import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  FloatingLabel,
  Button,
  Row,
  Col,
  Container,
  Modal,
} from "react-bootstrap";

function MyVerticallyCenteredModal(props: React.ComponentProps<typeof Modal>) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <p>
          Thank you for the message and I will get back to you as soon as
          possible.
        </p>
      </Modal.Body>
    </Modal>
  );
}

const Contact: React.FC = () => {
  const navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [pendingSubmit, setPendingSubmit] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      event.stopPropagation();
      setValidated(true);
      return;
    }
    setValidated(true);
    setPendingSubmit(true);
    setModalShow(true);
  };

  return (
    <Container>
      <h1 className="text text-black text-center mt-5 mb-5">
        Thanks for taking the time to reach out. How can I help you today?
      </h1>
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        // ref={formRef}
      >
        <Form.Group className="mb-3" controlId="floatingemail">
          <Row className="justify-content-center">
            <Col xs lg="3">
              <FloatingLabel
                controlId="floatingname"
                className="mb-3"
                label="Name"
              >
                <Form.Control type="text" placeholder="Ryan" required />
                <Form.Control.Feedback type="invalid">
                  Please enter a name.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
            <Col xs lg="3">
              <FloatingLabel
                controlId="floatingemail"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a valid email.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col xs lg="6">
              <FloatingLabel
                controlId="floatingmessage"
                label="Message"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  style={{ minHeight: "200px" }}
                  required
                />
                <Form.Control.Feedback type="invalid">
                  Please enter a message.
                </Form.Control.Feedback>
              </FloatingLabel>
            </Col>
          </Row>
          <Row className="text-center pt-3">
            <Col>
              <Button
                variant="outline-info"
                className="rounded-pill px-4 py-2"
                style={{
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "1.1rem",
                }}
                type="submit"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {
          setModalShow(false);
          if (pendingSubmit) {
            setPendingSubmit(false);
            navigate("/");
          }
        }}
      />
    </Container>
  );
};

export default Contact;
