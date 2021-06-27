import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";
import DeleteBrand from "../components/modals/DeleteBrand";
import DeleteDevice from "../components/modals/DeleteDevice";
import DeleteType from "../components/modals/DeleteType";

const Admin = () => {
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)
    const [DbrandVisible, setDBrandVisible] = useState(false)
    const [DtypeVisible, setDTypeVisible] = useState(false)
    const [DdeviceVisible, setDDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setBrandVisible(true)}
            >
                Добавить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDeviceVisible(true)}
            >
                Добавить устройство
            </Button>

            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDTypeVisible(true)}
            >
                Удалить тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDBrandVisible(true)}
            >
                Удалить бренд
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setDDeviceVisible(true)}
            >
                Удалить устройство
            </Button>

            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <DeleteBrand show={DbrandVisible} onHide={() => setDBrandVisible(false)}/>
            <DeleteDevice show={DdeviceVisible} onHide={() => setDDeviceVisible(false)}/>
            <DeleteType show={DtypeVisible} onHide={() => setDTypeVisible(false)}/>
        </Container>
    );
};

export default Admin;
