import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Form, Button} from "react-bootstrap";
import {deleteType} from "../../http/deviceAPI";

const DeleteType = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const removeType = () => {
        deleteType({id: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить тип
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(Number(e.target.value))}
                        placeholder={"Введите id типа"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={removeType}>Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteType;
