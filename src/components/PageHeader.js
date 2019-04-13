import React from 'react';

const PageHeader = (props) => {
  return (
    <header className="text-left mb-4">
      <div className="w-75 p-2 mx-auto rounded shadow bg-dark text-white">
        <h5 className="m-0">
          Note: The Bloodborne Ally API is still in development.
          <br/>
          <small>
            Apps will not be able to make queries without the owner of of the API activating it.
            To use the API in this app or another, contact the author at github.com/char-cole for more info.
          </small>
        </h5>
      </div>
      <h2 className="font-weight-bold">
        {props.page}
      </h2>
      <h5 className="pr-5">
        {props.description}
      </h5>
    </header>
  )
}

export default PageHeader;