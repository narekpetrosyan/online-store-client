import React from "react";
import { observer } from "mobx-react-lite";
import { useStore } from "../../hooks/useStore";
import { Row } from "react-bootstrap";
import { DeviceItem } from "./DeviceItem/DeviceItem";

export const DeviceList = observer(() => {
  const { device } = useStore();

  return (
    <Row className="d-flex">
      {device.devices.map((device, index) => (
        <DeviceItem key={index} device={device} />
      ))}
    </Row>
  );
});
