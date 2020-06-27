import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const DropDownWrapper = styled.div`
  .dropdown-content {
    transition: all 0.5s ease-in;
  }

  .dropdown:hover .dropdown-content {
    height: 9rem;
  }

  @media only screen and (max-width: 375px) {
    .dropdown:hover .dropdown-content {
      height: 16.5rem;
    }
  }

  @media only screen and (min-width: 375px) {
    .dropdown:hover .dropdown-content {
      height: 15rem;
    }
  }

  @media only screen and (min-width: 510px) {
    .dropdown:hover .dropdown-content {
      height: 13.5rem;
    }
  }

  @media only screen and (min-width: 600px) {
    .dropdown:hover .dropdown-content {
      height: 13.5rem;
    }
  }

  @media only screen and (min-width: 674px) {
    .dropdown:hover .dropdown-content {
      height: 12rem;
    }
  }

  @media only screen and (min-width: 768px) {
    .dropdown:hover .dropdown-content {
      height: 10.5rem;
    }
  }

  @media only screen and (min-width: 834px) {
    .dropdown:hover .dropdown-content {
      height: 9rem;
    }
  }

  @media only screen and (min-width: 1252px) {
    .dropdown:hover .dropdown-content {
      height: 7.5rem;
    }
  }
`

const Dropdown = props => {
  return (
    <DropDownWrapper>
      <div className="dropdown relative">
        <ul>
          <li className="hover:text-white hover:bg-silvered">/collections</li>
        </ul>
        <div className="dropdown-content relative overflow-hidden h-0">
          <Link to="/juanaInQuarantine/" aria-label="Juana 1 quarantine">
            <ul>
              <li className="hover:text-white hover:bg-silvered">
                juana in quarantine
              </li>
            </ul>
          </Link>
          <Link to="/juanaPartOneC/" aria-label="Juana 1 curated">
            <ul>
              <li className="hover:text-white hover:bg-silvered">
                juana part i - curated
              </li>
            </ul>
          </Link>
          <Link to="/juanaPartOne/" aria-label="Juana 1 simple">
            <ul>
              <li className="hover:text-white hover:bg-silvered">
                juana part i - 100% recycled denim
              </li>
            </ul>
          </Link>
          <Link to="/hold/" aria-label="Hold">
            <ul>
              <li className="hover:text-white hover:bg-silvered">hold</li>
            </ul>
          </Link>
          <Link to="/spaceVegan/" aria-label="Space vegan">
            <ul>
              <li className="hover:text-white hover:bg-silvered">
                space vegan
              </li>
            </ul>
          </Link>
          {/* <Link to="grandmasCouch" aria-label="Grandma's couch">
            <ul>
              <li className="hover:text-white hover:bg-silvered">
                grandma's couch
              </li>
            </ul>
  </Link> */}
        </div>
      </div>
    </DropDownWrapper>
  )
}

export default Dropdown
