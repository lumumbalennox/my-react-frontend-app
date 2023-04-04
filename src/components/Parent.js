import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Parent() {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/parents')
      .then((r) => r.json())
      .then((data) => setParents(data));
  }, []);

  return (
    <div>
      <h1>List Of Parents</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Is father alive?</th>
            <th>Is mother alive</th>
            <th>Guardian's name</th>
            <th>Sublocation</th>
            <th>Tel No</th>
            <th>Has disabilty</th>
            <th>Disability nature</th>
            <th>From poor household?</th>
            <th>Who has been paying fee?</th>
          </tr>
        </thead>
        <tbody>
          {parents.map((parent) => (
            <tr key={parent.id}>
              <td>{parent.father_name}</td>
              <td>{parent.mother_name}</td>
              <td>{parent.is_father_alive}</td>
              <td>{parent.is_mother_alive}</td>
              <td>{parent.guardian_name}</td>
              <td>{parent.contact}</td>
              <td>{parent.disability? 'Yes' : 'No'}</td>
              <td>{parent.if_yes_disability_nature}</td>
              <td>{parent.is_from_poor_household? 'Yes' : 'No'}</td>
              <td>{parent.who_has_been_paying_your_fee}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Parent;
