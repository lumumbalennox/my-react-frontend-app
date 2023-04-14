import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function Constraint() {
  const [constraints, setConstraints] = useState([]);

  useEffect(() => {
    fetch('https://sinatra-project-1.onrender.com/constraints')
      .then((r) => r.json())
      .then((data) => setConstraints(data));
  }, []);

  const handleDelete = (constraintId) => {
    fetch(`https://sinatra-project-1.onrender.com/constraints/${constraintId}`, {
      method: 'DELETE'
    })
      .then((r) => r.json())
      .then((data) => {
        // remove the deleted parent from the list
        const updatedConstraints = constraints.filter((constraint) => constraint.id !== constraintId);
        setConstraints(updatedConstraints);
      });
  };

  return (
    <div>
      <h1>Listing Fee Constraints on Parents / Guardian</h1>
      <Table responsive>
        <thead>
          <tr>
            <th>Number of siblings</th>
            <th>Number in Secondary</th>
            <th>Number in Colleges</th>
            <th>Parent Id</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {constraints.map((constraint) => (
            <tr key={constraint.id}>
              <td>{constraint.how_many_children_do_you_have}</td>
              <td>{constraint.how_many_in_secondary}</td>
              <td>{constraint.parents_id}</td>
              {/* <td> <button onClick={() => handleDelete(constraint.id)}>Delete</button></td> */}
              <td> <Button variant="primary" type="submit" onClick={() => handleDelete(constraint.id)}>Delete</Button></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Constraint;
