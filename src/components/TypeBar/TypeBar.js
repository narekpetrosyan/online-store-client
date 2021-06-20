import React from 'react';
import {observer} from "mobx-react-lite";
import {useStore} from "../../hooks/useStore";
import {ListGroup} from "react-bootstrap";

export const TypeBar = observer(() => {
    const {device} = useStore()
    return (
        <ListGroup>
            {device.types.map((type, index) => (
                <ListGroup.Item
                    style={{cursor: "pointer"}}
                    key={index}
                    onClick={() => device.setSelectedType(type)}
                    active={type.id === device.selectedType.id}
                >
                    {type.name}
                </ListGroup.Item>
            ))}
        </ListGroup>
    );
});
