import React from 'react';

const PageHeader = (props) => {
  return (
    <header className="text-left mb-4">
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