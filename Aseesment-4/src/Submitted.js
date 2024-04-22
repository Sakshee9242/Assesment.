import React from 'react'
import { Link } from 'react-router-dom'

function Submitted() {
  return (
    <div className='container py-5 w-50'>
        <div class="row justify-content-center align-items-center bg-light shadow p-5 rounded-5">
            <div class="col col-lg-12 py-5">        
            <h3 className='text-secondary fw-bold'>Thanks For Submitting the Form</h3>
            <h4>Want To Go Back</h4>
            <Link to='/'>Click Here</Link> 
            </div>
        </div>
      
    </div>
  )
}

export default Submitted
