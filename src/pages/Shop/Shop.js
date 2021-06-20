import React, { useEffect } from "react";
import { observer } from "mobx-react-lite";
import { Col, Container, Row } from "react-bootstrap";
import { TypeBar } from "../../components/TypeBar/TypeBar";
import { BrandBar } from "../../components/BrandBar/BrandBar";
import { DeviceList } from "../../components/DeviceList/DeviceList";
import { useStore } from "../../hooks/useStore";
import { fetchBrands, fetchDevices, fetchTypes } from "../../http/deviceApi";
import { Pages } from "../../components/Pages/Pages";

export const Shop = observer(() => {
  const { device } = useStore();

  useEffect(() => {
    fetchTypes().then((data) => {
      device.setTypes(data);
    });
    fetchBrands().then((data) => device.setBrands(data));
    fetchDevices(null, null, 1, 2).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, []);

  useEffect(() => {
    fetchDevices(
      device.selectedType.id,
      device.selectedBrand.id,
      device.page,
      2,
    ).then((data) => {
      device.setDevices(data.rows);
      device.setTotalCount(data.count);
    });
  }, [device.selectedType, device.selectedBrand, device.page]);

  return (
    <Container>
      <Row>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
          <Pages />
        </Col>
      </Row>
    </Container>
  );
});
