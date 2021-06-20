import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import { CreateBrand } from "../../components/modals/CreateBrand";
import { CreateDevice } from "../../components/modals/CreateDevice";
import { CreateType } from "../../components/modals/CreateType";

export const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container className="d-flex flex-column">
      <Button
        variant="outline-dark"
        onClick={() => setTypeVisible(true)}
        className="mt-4 p-2"
      >
        Add type
      </Button>
      <Button
        variant="outline-dark"
        onClick={() => setBrandVisible(true)}
        className="mt-4 p-2"
      >
        Add brand
      </Button>
      <Button
        variant="outline-dark"
        onClick={() => setDeviceVisible(true)}
        className="mt-4 p-2"
      >
        Add device
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
};
