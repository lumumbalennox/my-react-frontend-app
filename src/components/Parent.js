import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Parent() {
  const [parents, setParents] = useState([]);

  useEffect(() => {
    fetch('https://sinatra-project-1.onrender.com/parents')
      .then((r) => r.json())
      .then((data) => setParents(data));
  }, []);

  const handleDelete = (parentId) => {
    fetch(`https://sinatra-project-1.onrender.com/parents/${parentId}`, {
      method: 'DELETE'
    })
      .then((r) => r.json())
      .then((data) => {
        // remove the deleted parent from the list
        const updatedParents = parents.filter((parent) => parent.id !== parentId);
        setParents(updatedParents);
      });
  };

  return (
    <div>
      <h1>Parents , Guardians or Caregivers</h1>
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
            <th>Delete</th>
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
              {/* <td> <button onClick={() => handleDelete(parent.id)}>Delete</button></td> */}
              <td> <Button variant="primary" type="submit" onClick={() => handleDelete(parent.id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Parent;
