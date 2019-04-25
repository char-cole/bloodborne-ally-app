import React from 'react'

const SearchOptions = (props) => {
  return (
    <div className="col-12">
      <label htmlFor="chaliceCheckBox" className="form-label mr-3">
        Search for Chalices?
      </label>
      <input if="chaliceCheckBox" type="checkbox" value={props.chaliceCheck} onChange={()=> {
        props.toggleChalice(props.chaliceCheck);
      }}>
      </input>
    </div>
  )
}

export default SearchOptions;