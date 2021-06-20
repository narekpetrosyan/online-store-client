import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Image, Card, Button } from "react-bootstrap";
import { ReactComponent as StarIcon } from "../../assets/icons/star.svg";
import { fetchOneDevice } from "../../http/deviceApi";

export const DevicePage = () => {
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);
  return (
    <Container className="mt-2">
      <Row>
        <Col md={4}>
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col md={4}>
          <Row className="d-flex flex-column">
            <h2>{device.name}</h2>
            <div className="d-flex align-items-center justify-content-center">
              <div>5</div>
              <StarIcon />
            </div>
          </Row>
        </Col>
        <Col md={4}>
          <Card
            className="d-flex flex-column align-items-center justify-content-around"
            style={{ width: 300 }}
          >
            <h3>{device.price}</h3>
            <Button variant={"outline-dark"}>Add to card</Button>
          </Card>
        </Col>
      </Row>

      <Row className="d-flex flex-column m-3">
        <h1>Description</h1>
        {device.info.map((inf, index) => (
          <Row key={index}>
            {inf.title}: {inf.description}
          </Row>
        ))}
      </Row>
    </Container>
  );
};
