import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Sibling() {
  const [siblings, setSiblings] = useState([]);

  useEffect(() => {
    fetch('https://sinatra-project-1.onrender.com/siblings')
      .then((r) => r.json())
      .then((data) => setSiblings(data));
  }, []);

  const handleDelete = (siblingId) => {
    fetch(`https://sinatra-project-1.onrender.com/siblings/${siblingId}`, {
      method: 'DELETE'
    })
      .then((r) => r.json())
      .then((data) => {
        // remove the deleted parent from the list
        const updatedSiblings = siblings.filter((sibling) => sibling.id !== siblingId);
        setSiblings(updatedSiblings);
      });
  };

  return (
    <div>
      <h1>Applicants' Siblings Information</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Name</th>
            <th>Relationship</th>
            <th>School</th>
            <th>Form/Class</th>
            <th>Total fee</th>
            <th>Outstanding balance</th>
            <th>Student Id</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {siblings.map((sibling) => (
            <tr key={sibling.id}>
              <td>{sibling.name}</td>
              <td>{sibling.relationship}</td>
              <td>{sibling.school}</td>
              <td>{sibling.form_class}</td>
              <td>{sibling.total_fee}</td>
              <td>{sibling.outstanding_balance}</td>
              <td>{sibling.student_id}</td>
              {/* <td> <button onClick={() => handleDelete(sibling.id)}>Delete</button></td> */}
              <td> <Button variant="primary" type="submit" onClick={() => handleDelete(sibling.id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Sibling;
