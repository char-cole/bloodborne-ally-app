import React from 'react'

const PageHeader = props => {
  return (
    <header className='text-left mb-4'>
      <div className='w-75 p-2 mx-auto rounded shadow bg-danger text-white'>
        <h5 className='m-0'>
          Note: The Bloodborne Ally API is still in development.
          <br />
          <small>
            This API goes to sleep when not in use, and can only be awakened
            manually. Contact the owner if you would like to make queries
            against the API.
          </small>
        </h5>
      </div>
      <h2 className='font-weight-bold'>{props.page}</h2>
      <h5 className='pr-5 font-weight-normal'>
        {props.description || 'Find ' + props.page + ' by name'}
      </h5>
    </header>
  )
}

export default PageHeader
