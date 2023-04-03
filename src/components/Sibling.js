import React, { useEffect, useState } from 'react';

function Sibling() {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/siblings')
      .then((r) => r.json())
      .then((data) => setSchools(data));
  }, []);

  return (
    <div>
      <h1>List Of Schools</h1>
      <table>
        <thead>
          <tr>
            <th>Form</th>
            <th>Class/Stream</th>
            <th>Term</th>
            <th>Position last term</th>
            <th>Principal Name</th>
            <th>Contact</th>
            <th>Student Id</th>
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Sibling;
