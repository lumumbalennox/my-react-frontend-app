import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Sibling() {
  const [siblings, setSiblings] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/siblings')
      .then((r) => r.json())
      .then((data) => setSiblings(data));
  }, []);

  return (
    <div>
      <h1>Listing Student Siblings</h1>
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
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Sibling;
