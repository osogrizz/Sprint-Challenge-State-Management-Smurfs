import React, { useState } from 'react'

import { connect } from 'react-redux';
import { addSmurf } from '../actions';

const SmurfForm = (props) => {
  const [smurf, setSmurf] = useState({
    name: '',
    age: '',
    height: ''
  })
  

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addSmurf({
      ...smurf,
    })
    setSmurf({
      name: '',
      age: '',
      height: ''
    })
  }


  const handleChange = (e) => {
    setSmurf({
      ...smurf,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input type="text" name="name"  placeholder="name" onChange={handleChange} value={smurf.name} />
        <input type="text" name="age" placeholder="age" onChange={handleChange} value={smurf.age}  />
        <input type="text" name="height" placeholder="height" onChange={handleChange} value={smurf.height} />
        <button onClick={() => props.addSmurf()}>Add Smurf</button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    smurfs: state.smurfs,
    error:  state.error
  }
}

export default connect(mapStateToProps, { addSmurf })(SmurfForm)
