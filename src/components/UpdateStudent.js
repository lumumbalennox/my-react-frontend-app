import React from 'react'

function UpdateStudent({ editForm, handleStudentUpdate, handleChange }) {
    let {id,adm,fname,mname,lname,dob,district,division,sublocation,village,ward,ever_received_NGCDF,how_much,year_,any_other_bursary,year_received,amount,parents_id,school_id} = editForm

// PATCH request; calls handleStudentUpdate to push changes to the page
    function handleEditForm(e) {
        e.preventDefault();
        fetch(`https://sinatra-project-1.onrender.com/students/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(editForm),
        })
            .then(resp => resp.json())
            .then(updatedStudent => {
                handleStudentUpdate(updatedStudent)})
    }

    return (
        <div>
            <h4>Edit Customer</h4>
            <form onSubmit={handleEditForm}>
                <input type="text" name="fname" value={fname} onChange={handleChange}/>
                <input type="text" name="mname" value={mname} onChange={handleChange}/>
                <input type="text" name="lname" value={lname} onChange={handleChange}/>
                <input type="text" name="adm" value={adm} onChange={handleChange}/>
                <input type="text" name="dob" value={dob} onChange={handleChange}/>
                <input type="text" name="district" value={district} onChange={handleChange}/>
                <input type="text" name="division" value={division} onChange={handleChange}/>
                <input type="text" name="sublocation" value={sublocation} onChange={handleChange}/>
                <input type="text" name="village" value={village} onChange={handleChange}/>
                <input type="text" name="ward" value={ward} onChange={handleChange}/>
                <input type="text" name="ever_received_NGCDF" value={ever_received_NGCDF} onChange={handleChange}/>
                <input type="text" name="how_much" value={how_much} onChange={handleChange}/>
                <input type="text" name="year_" value={year_} onChange={handleChange}/>
                <input type="text" name="any_other_bursary" value={any_other_bursary} onChange={handleChange}/>
                <input type="text" name="year_recieved" value={year_received} onChange={handleChange}/>
                <input type="text" name="amount" value={amount} onChange={handleChange}/>
                <input type="text" name="parents_id" value={parents_id} onChange={handleChange}/>
                <input type="text" name="school_id" value={school_id} onChange={handleChange}/>
                <button type="submit">Submit Changes</button>
            </form>
        </div>
    )
}
export default UpdateStudent;