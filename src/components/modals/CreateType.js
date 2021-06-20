import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { createType } from "../../http/deviceApi";

export const CreateType = ({ show, onHide }) => {
  const [value, setValue] = useState("");

  const addType = () => {
    createType({ name: value }).then((data) => {
      setValue("");
      onHide();
    });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add new type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            onChange={(e) => setValue(e.target.value)}
            value={value}
            placeholder="Mention the name"
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>
          Close
        </Button>
        <Button onClick={() => addType()} variant="outline-success">
          Add type
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
