import React from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../redux/actions";
import StudentModel from "./studentModel";
function StudentData() {
  const data = useSelector((state) => {
    return state.user.items;
  });

  const dispatch = useDispatch();
  const handleDelete = (index) => {
    dispatch(deleteUser(index));
  };
  return (
    <div>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>
                <StudentModel
                  name="edit"
                  status={true}
                  updata={item}
                  index={i}
                />
              </td>
              <td>
                <Button
                  variant="danger"
                  className="sm ms-2"
                  onClick={() => handleDelete(i)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default StudentData;
