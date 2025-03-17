import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import emailjs from '@emailjs/browser';

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ message: "", type: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(
        'service_h5p2s64',
        'template_gf4tuvo',
        form.current,
        'QFb7ydoyHLt0MGkmC'
      )
      .then(() => {
        setStatus({
          message: "Message sent successfully!",
          type: "success"
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch((error) => {
        setStatus({
          message: "Failed to send message. Please try again.",
          type: "danger"
        });
        console.error(error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      backgroundColor: "#121212",
      paddingTop: "80px" // Added padding to push content down below navbar
    }}>
      <Container fluid className="contact-section" id="contact">
        <Particle />
        <Container className="contact-content">
          <Row className="justify-content-center">
            <Col md={7} className="contact-header" style={{ 
              color: "white", 
              textAlign: "center", 
              position: "relative", 
              zIndex: 5,
              marginTop: "40px" // Additional margin to ensure separation from navbar
            }}>
              <h1 style={{ paddingBottom: 15, fontSize: "3.5rem", fontWeight: "bold", fontFamily: "'Poppins', sans-serif" }} className="heading">
                Contact <strong className="main-name" style={{ color: "#ca5df4" }}>Me</strong>
              </h1>
              <p style={{ fontSize: "1.5rem", marginBottom: "30px", color: "#bbb" }}>
                Feel free to reach out to me anytime.
              </p>
              
              {status.message && (
                <Alert variant={status.type} className="mb-4">
                  {status.message}
                </Alert>
              )}
              
              <Form ref={form} onSubmit={handleSubmit} style={{ fontSize: "1.2rem" }}>
                <Form.Group controlId="formName">
                  <Form.Label style={{ color: "#ca5df4", fontSize: "1.3rem", fontWeight: "bold" }}>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: "#333", color: "white", border: "2px solid #ca5df4", padding: "12px", fontSize: "1.2rem", position: "relative", zIndex: 10 }}
                  />
                </Form.Group>
                
                <Form.Group controlId="formEmail" className="mt-3">
                  <Form.Label style={{ color: "#ca5df4", fontSize: "1.3rem", fontWeight: "bold" }}>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: "#333", color: "white", border: "2px solid #ca5df4", padding: "12px", fontSize: "1.2rem", position: "relative", zIndex: 10 }}
                  />
                </Form.Group>
                
                <Form.Group controlId="formSubject" className="mt-3">
                  <Form.Label style={{ color: "#ca5df4", fontSize: "1.3rem", fontWeight: "bold" }}>Subject</Form.Label>
                  <Form.Control
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: "#333", color: "white", border: "2px solid #ca5df4", padding: "12px", fontSize: "1.2rem", position: "relative", zIndex: 10 }}
                  />
                </Form.Group>
                
                <Form.Group controlId="formMessage" className="mt-3">
                  <Form.Label style={{ color: "#ca5df4", fontSize: "1.3rem", fontWeight: "bold" }}>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={{ backgroundColor: "#333", color: "white", border: "2px solid #ca5df4", padding: "12px", fontSize: "1.2rem", position: "relative", zIndex: 10 }}
                  />
                </Form.Group>
                
                <Button 
                  variant="primary" 
                  type="submit" 
                  disabled={isSubmitting}
                  className="mt-4" 
                  style={{ fontSize: "1.3rem", padding: "12px 25px", backgroundColor: "#ca5df4", border: "none" }}
                >
                  {isSubmitting ? "Sending..." : "Send"}
                </Button>
                
              </Form>
              <div style={{ marginTop: "40px", fontSize: "1.3rem", color: "white" }}>
                <p><strong>Email:</strong> abhiksamanta004@gmail.com</p>
                <p><strong>Phone:</strong> +91 790 831 0533</p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Contact;