// import React, { useEffect, useState } from 'react';
// // import Button from 'react-bootstrap/Button';
// function UpdateStudent({students, onUpdateStudents}){
//     const [fname, setFname] = useState('');
//     const [mname, setMname] = useState('');
//     const [lname, setLname] = useState('');
//     const [adm,  setAdm] = useState('');
//     const [district, setDistrict] = useState('');
//     const [division, setDivision] = useState('');
//     const [location, setLocation] = useState('');
//     const [sublocation, setSublocation] = useState('')
//     const [village, setVillage] = useState('');
//     const [ward, setWard] = useState('');
//     const [ever_received_NGCDF, setEver_received_NGCDF] = useState('');
//     const [how_much, setHow_much] = useState('');
//     const [year_received, setYear_received] =useState('');
//     const [parents_id, setParents_id] = useState('');
//     const [school_id, SetSchool_id] = useState('');
//     const [any_other_bursary, SetAny_other_bursary] = useState('');
//     const [amount, SetAmount] = useState('');
  
//     function handleSubmit(e){
//       e.preventDefault();
//       fetch(`http://localhost:9292/students/${studentId}`, {
//         method: 'PATCH',
//         header: {
//           "Content-Type" : "application/json",
//         },
//         body : JSON.stringify({
//         fname : fname,
//         mname: mname,
//         lname :lname,
//         adm :adm,
//         district : district,
//         division : division,
//         location : location,
//         sublocation : sublocation,
//         village : village,
//         ward : ward,
//         ever_received_NGCDF: ever_received_NGCDF,
//         how_much : how_much,
//         year_: year_,
//         year_received : year_received,
//         parents_id: parents_id,
//         school_id: school_id,
//         amount: amount
    
//         }),
//       })
//       .then(r) => r.json())
//       .then((updatedStudent)=>onUpdateStudents(updatedStudent));
//     };

//     .then((r) => r.json())
//     .then((data) => {


//     return (
//         <form onSubmit={handleSubmit}>
//           <label>
//             First Name:
//             <input
//               type="text"
//               value={fname}
//               onChange={(event) => setFname(event.target.value)}
//             />
//           </label>
//           <label>
//             Middle Name:
//             <input
//               type="text"
//               value={mname}
//               onChange={(event) => setMname(event.target.value)}
//             />
//           </label>
//           <label>
//             Last Name:
//             <input
//               type="text"
//               value={lname}
//               onChange={(event) => setLname(event.target.value)}
//             />
//           </label>
//           <label>
//             Adm No:
//             <input
//               type="text"
//               value={adm}
//               onChange={(event) => setAdm(event.target.value)}
//             />
//           </label>
//           <label>
//             District:
//             <input
//               type="text"
//               value={district}
//               onChange={(event) => setDistrict(event.target.value)}
//             />
//           </label>
    
//           <label>
//             Division:
//             <input
//               type="text"
//               value={division}
//               onChange={(event) => setDivision(event.target.value)}
//             />
//           </label>
    
//           <label>
//             Location:
//             <input
//               type="text"
//               value={location}
//               onChange={(event) => setLocation(event.target.value)}
//             />
//           </label>
    
//           <label>
//             Sublocation:
//             <input
//               type="text"
//               value={sublocation}
//               onChange={(event) => setSublocation(event.target.value)}
//             />
//           </label>
    
//           <label>
//             Village/Estate:
//             <input
//               type="text"
//               value={village}
//               onChange={(event) => setVillage(event.target.value)}
//             />
//           </label>
    
//           <label>
//             Ward:
//             <input
//               type="text"
//               value={ward}
//               onChange={(event) => setWard(event.target.value)}
//             />
//           </label>
    
//           <label>
//             Ever received cdf:
//             <input
//               type="text"
//               value={ever_received_NGCDF}
//               onChange={(event) => setEver_received_NGCDF(event.target.value)}
//             />
//           </label>
    
//           <label>
//             How much you received:
//             <input
//               type="text"
//               value={how_much}
//               onChange={(event) => setHow_much(event.target.value)}
//             />
//           </label>
    
//           <label>
//             Year awarded:
//             <input
//               type="text"
//               value={year_}
//               onChange={(event) => setYear_received(event.target.value)}
//             />
//           </label>

//           <label>
//             Any other bursary:
//             <input
//               type="text"
//               value={any_other_bursary}
//               onChange={(event) => SetAny_other_bursary(event.target.value)}
//             />
//           </label>

//           <label>
//             Year awarded:
//             <input
//               type="text"
//               value={year_received}
//               onChange={(event) => setYear_received(event.target.value)}
//             />
//           </label>

//           <label>
//             Amount:
//             <input
//               type="text"
//               value={amount}
//               onChange={(event) => SetAmount(event.target.value)}
//             />
//           </label>
//           <label>
//             ParentsId:
//             <input
//               type="text"
//               value={parents_id}
//               onChange={(event) => setParents_id(event.target.value)}
//             />
//           </label>

//           <label>
//             SchoolId:
//             <input
//               type="text"
//               value={school_id}
//               onChange={(event) => SetSchool_id(event.target.value)}
//             />
//           </label>
    
          
//           <button type="submit">Submit</button>
//         </form>
//       );
//     }
// export default UpdateStudent;    