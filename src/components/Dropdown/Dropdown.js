import React from "react"
import { Link } from "gatsby"

import "./Dropdown.css"

const Dropdown = props => {
  return (
    <div className="dropdown relative">
      <ul>
        <li className="hover:text-white hover:bg-silvered">/collections</li>
      </ul>
      <div className="dropdown-content relative overflow-hidden h-0">
        <Link to="juanaPartOneC" aria-label="Juana 1 curated">
          <ul>
            <li className="hover:text-white hover:bg-silvered">
              juana part i - curated
            </li>
          </ul>
        </Link>
        <Link to="juanaPartOne" aria-label="Juana 1 simple">
          <ul>
            <li className="hover:text-white hover:bg-silvered">
              juana part i - 100% recycled denim
            </li>
          </ul>
        </Link>
        <Link to="hold" aria-label="Hold">
          <ul>
            <li className="hover:text-white hover:bg-silvered">hold</li>
          </ul>
        </Link>
        <Link to="spaceVegan" aria-label="Space vegan">
          <ul>
            <li className="hover:text-white hover:bg-silvered">space vegan</li>
          </ul>
        </Link>
        <Link to="grandmasCouch" aria-label="Grandma's couch">
          <ul>
            <li className="hover:text-white hover:bg-silvered">
              grandma's couch
            </li>
          </ul>
        </Link>
      </div>
    </div>
  )
}

export default Dropdown
