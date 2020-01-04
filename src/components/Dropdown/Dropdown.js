import React from "react"
import { Link } from "gatsby"

import "./Dropdown.css"

const Dropdown = props => {
  return (
    <div className="dropdown relative">
      <li className="hover:text-white hover:bg-silvered">/collections</li>
      <div className="dropdown-content relative overflow-hidden h-0">
        <Link to="juanaPartOneC">
          <li className="hover:text-white hover:bg-silvered">
            juana part 1 - curated
          </li>
        </Link>
        <Link to="juanaPartOne">
          <li className="hover:text-white hover:bg-silvered">juana part 1</li>
        </Link>
        <Link to="hold">
          <li className="hover:text-white hover:bg-silvered">hold</li>
        </Link>
        <Link to="spaceVegan">
          <li className="hover:text-white hover:bg-silvered">space vegan</li>
        </Link>
        <Link to="grandmasCouch">
          <li className="hover:text-white hover:bg-silvered">
            grandma's couch
          </li>
        </Link>
      </div>
    </div>
  )
}

export default Dropdown
