import React from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "../../hooks/useStore";
import {Card, Row} from "react-bootstrap";

export const BrandBar = observer(() => {
    const {device} = useStore()
    return (
        <Row className="d-flex">
            {device.brands.map((brand,index) => (
                <Card
                    key={index}
                    className="p-3"
                    style={{cursor: "pointer"}}
                    onClick={() => device.setSelectedBrand(brand)}
                    border={brand.id === device.selectedBrand.id ? "danger" : "light"}
                >
                    {brand.name}
                </Card>
            ))}
        </Row>
    );
});

