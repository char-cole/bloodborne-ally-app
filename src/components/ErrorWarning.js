import React from 'react'

const ErrorWarning = () => {
  return (
    <div className='col-12 col-md-6 p-5'>
      <div className='border border-danger rounded p-1'>
        <p className='border border-danger rounded p-3'>
          There was an <b>error</b>. The API is probably asleep. It can be
          awakened by its owner.
        </p>
      </div>
    </div>
  )
}

export default ErrorWarning
