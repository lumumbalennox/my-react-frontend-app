import React, { useState } from 'react';

function NewStudentForm() {
  const [fname, setFname] = useState('');
  const [mname, setMname] = useState('');
  const [lname, setLname] = useState('');
  const [adm,  setAdm] = useState('');
  const [district, setDistrict] = useState('');
  const [division, setDivision] = useState('');
  const [location, setLocation] = useState('');
  const [sublocation, setSublocation] = useState('')
  const [village, setVillage] = useState('');
  const [ward, setWard] = useState('');
  const [ever_received_NGCDF, setEver_received_NGCDF] = useState('');
  const [how_much, setHow_much] = useState('');
  const [year_received, setYear_received] =useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { fname, mname, lname , adm, district, division, location, sublocation, village, ward, ever_received_NGCDF};
    fetch('http://localhost:9292/students', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        // Handle successful response, e.g. redirect to confirmation page
      })
      .catch((error) => {
        console.error('Error:', error);
        // Handle error, e.g. display error message to user
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input
          type="text"
          value={fname}
          onChange={(event) => setFname(event.target.value)}
        />
      </label>
      <label>
        Middle Name:
        <input
          type="text"
          value={mname}
          onChange={(event) => setMname(event.target.value)}
        />
      </label>
      <label>
        Last Name:
        <input
          type="text"
          value={lname}
          onChange={(event) => setLname(event.target.value)}
        />
      </label>
      <label>
        Adm No:
        <input
          type="text"
          value={adm}
          onChange={(event) => setAdm(event.target.value)}
        />
      </label>
      <label>
        District:
        <input
          type="text"
          value={district}
          onChange={(event) => setDistrict(event.target.value)}
        />
      </label>

      <label>
        Division:
        <input
          type="text"
          value={division}
          onChange={(event) => setDivision(event.target.value)}
        />
      </label>

      <label>
        Location:
        <input
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
      </label>

      <label>
        Sublocation:
        <input
          type="text"
          value={sublocation}
          onChange={(event) => setSublocation(event.target.value)}
        />
      </label>

      <label>
        Village/Estate:
        <input
          type="text"
          value={village}
          onChange={(event) => setVillage(event.target.value)}
        />
      </label>

      <label>
        Ward:
        <input
          type="text"
          value={ward}
          onChange={(event) => setWard(event.target.value)}
        />
      </label>

      <label>
        Ever received cdf:
        <input
          type="text"
          value={ever_received_NGCDF}
          onChange={(event) => setEver_received_NGCDF(event.target.value)}
        />
      </label>

      <label>
        How much you received:
        <input
          type="text"
          value={how_much}
          onChange={(event) => setHow_much(event.target.value)}
        />
      </label>

      <label>
        Year awarded:
        <input
          type="text"
          value={year_received}
          onChange={(event) => setYear_received(event.target.value)}
        />
      </label>

      
      <button type="submit">Submit</button>
    </form>
  );
}

export default NewStudentForm;
