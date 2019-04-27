import React from 'react';
import { Link } from "react-router-dom";

const Links = (props) => {
  return (
    props.navLinks.map((x,i) => {
      return (
        <Link to={x.url} className="col-2 text-center" key={i} onClick={() => props.updateResults([])}>
          {x.name}
        </Link>
      )
    })
  )
}

export default Links;