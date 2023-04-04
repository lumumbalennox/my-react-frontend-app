import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

function Constraint() {
  const [constraints, setConstraints] = useState([]);

  useEffect(() => {
    fetch('http://localhost:9292/constraints')
      .then((r) => r.json())
      .then((data) => setConstraints(data));
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {constraints.map((constraint) => (
            <tr key={constraint.id}>
              <td>{constraint.how_many_children_do_you_have}</td>
              <td>{constraint.how_many_in_secondary}</td>
              <td>{constraint.parents_id}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Constraint;
