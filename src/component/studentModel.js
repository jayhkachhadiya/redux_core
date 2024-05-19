import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateUser, userRegister } from "../redux/actions";
function StudentModel({ name, status, updata, index }) {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);

  const handleModalClose = async () => {
    setModalShow(false);
  };

  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const inputHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  };

  const submitButton = async (e) => {
    if (status) {
      e.preventDefault();
      dispatch(updateUser(index, inputField));
    }
    else {
      e.preventDefault();
      dispatch(userRegister(inputField));
    }
    setModalShow(false)
  };

  const handleOpenModel = () => {
    setModalShow(true)
    if (status === true) {
      setInputField(updata)
      dispatch(updateUser(status))
      console.log(status, "statusstatus")
    } else {
      setInputField("")
    }

  }
  return (
    <div>
      <Button
        variant="primary"
        onClick={() => handleOpenModel()}
      >
        {name}
      </Button>
      <Modal
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        show={modalShow}
        onHide={handleModalClose}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {status ? "edit" : "Add"} data
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              name="name"
              value={inputField.name}
              onChange={inputHandler}
            />
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter Email"
              name="email"
              value={inputField.email}
              onChange={inputHandler}
            />
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Mobile"
              name="phone"
              value={inputField.phone}
              onChange={inputHandler}
            />
            <Button
              variant="primary"
              type="submit"
              className="mt-3"
              onClick={submitButton}
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default StudentModel;
