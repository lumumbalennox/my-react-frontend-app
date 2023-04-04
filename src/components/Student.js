import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Student() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/students')
      .then((r) => r.json())
      .then((data) => setStudents(data));
  }, []);

  const handleDelete = (studentId) => {
    fetch(`http://localhost:9292/students/${studentId}`, {
      method: 'DELETE'
    })
      .then((r) => r.json())
      .then((data) => {
        // remove the deleted parent from the list
        const updatedStudents = students.filter((student) => student.id !== studentId);
        setStudents(updatedStudents);
      });
  };

  return (
    <div>
      <h1>List Students</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Admission No</th>
            <th>District</th>
            <th>Division</th>
            <th>Location</th>
            <th>Sublocation</th>
            <th>Village</th>
            <th>Ward</th>
            <th>Received CDF</th>
            <th>How Much</th>
            <th>Year Received</th>
            <th>Other Bursaries Received</th>
            <th>Year Received</th>
            <th>Amount</th>
            <th>Parent Id</th>
            <th>School Id</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.id}>
              <td>{`${student.fname} ${student.mname} ${student.lname}`}</td>
              <td>{student.adm}</td>
              <td>{student.district}</td>
              <td>{student.division}</td>
              <td>{student.location}</td>
              <td>{student.sublocation}</td>
              <td>{student.village}</td>
              <td>{student.ward}</td>
              <td>{student.ever_received_NGCDF ? 'Yes' : 'No'}</td>
              <td>{student.how_much}</td>
              <td>{student.year_received}</td>
              <td>{student.other_bursaries_received ? 'Yes' : 'No'}</td>
              <td>{student.other_bursaries_received_year}</td>
              <td>{student.other_bursaries_received_amount}</td>
              <td>{student.parents_id}</td>
              <td>{student.school_id}</td>
              <td> <button onClick={() => handleDelete(student.id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Student;
