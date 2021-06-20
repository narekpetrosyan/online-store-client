import React from "react";
import { ReactComponent as StarIcon } from "../../../assets/icons/star.svg";
import { Card, Col, Image } from "react-bootstrap";
import { useHistory } from "react-router";
import { DEVICE_ROUTE } from "../../../utils/constants";

export const DeviceItem = ({ device }) => {
  const history = useHistory();
  return (
    <Col
      md={3}
      className="my-4"
      onClick={() => history.push(`${DEVICE_ROUTE}/${device.id}`)}
    >
      <Card style={{ width: 150, cursor: "pointer" }} border={"light"}>
        <Image
          width={150}
          height={150}
          src={process.env.REACT_APP_API_URL + device.img}
        />
        <div className="mt-1 d-flex justify-content-between">
          <div className="text-black-50">Samsung...</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <StarIcon />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
};
