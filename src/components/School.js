import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function School() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/schools')
      .then((r) => r.json())
      .then((data) => setSchools(data));
  }, []);

  const handleDelete = (schoolId) => {
    fetch(`http://localhost:9292/schools/${schoolId}`, {
      method: 'DELETE'
    })
      .then((r) => r.json())
      .then((data) => {
        // remove the deleted parent from the list
        const updatedSchools = schools.filter((school) => school.id !== schoolId);
        setSchools(updatedSchools);
      });
  };

  return (
    <div>
      <h1>List Of Schools</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Form</th>
            <th>Class/Stream</th>
            <th>Term</th>
            <th>Position last term</th>
            <th>Principal Name</th>
            <th>Contact</th>
            <th>Student Id</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {schools.map((school) => (
            <tr key={school.id}>
              <td>{school.form}</td>
              <td>{school.stream}</td>
              <td>{school.term}</td>
              <td>{school.last_term_position}</td>
              <td>{school.principal}</td>
              <td>{school.contact}</td>
              <td>{school.student_id}</td>
              {/* <td> <button onClick={() => handleDelete(school.id)}>Delete</button></td> */}
              <td> <Button variant="primary" type="submit" onClick={() => handleDelete(school.id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default School;
