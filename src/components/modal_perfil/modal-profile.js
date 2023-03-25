import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Editar_perfil from '../editar_perfil/editar_perfil';

const ModalLogin = ({ show, handleClose }) => {


    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header closeButton>
                <Modal.Title>Actualizar perfil</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Editar_perfil />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    Guardar cambios
                </Button>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ModalLogin;
