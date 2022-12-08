import React, { useState } from 'react';
import './AddEntryForm.css';


const AddEntryForm = (props) => {

  const [weight, setWeight] = useState(0);
  const [date, setDate] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    let newEntry={
      weight: weight,
      date: date
    };
    console.log(newEntry)
    props.addNewEnrtyProperty(newEntry)
  }

  return (
    <form onSubmit ={handleSubmit} className='form-grid'>
      <div className='form-group'>
        <label>Weight</label>
        <input className='form-control' type='number' value={weight} onChange={(event) => setWeight(parseFloat(event.target.value))}/>
      </div>
      <div className='form-group'>
        <label>Date</label>
        <input className='form-control' type='date' value={date} onChange={(event) => setDate(event.target.value)} />
      </div>
      <button className='btn btn-primary' style={{'margin-top': '1em'}} type='submit'>Add</button>
    </form>
    );
}
 
export default AddEntryForm ;