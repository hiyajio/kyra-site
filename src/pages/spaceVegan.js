import React from "react"

import Layout from "../components/Layout/index.js"
import HeaderFolio from "../components/HeaderFolio/index.js"
import TopScroll from "../components/TopScroll/index.js"

import "../styles/spaceVegan.css"

const SpaceVeganPage = props => {
  return (
    <Layout>
      <TopScroll>
        <div
          className={`flex bg-white font-body h-screen w-2/5 overflow-hidden`}
        ></div>
        <picture>
          <source
            srcset={`../../images/collections/spaceVegan/kbSpaceVegan1.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/spaceVegan/kbSpaceVegan1.png`}
            alt="Space vegan 1"
            className="one-sv abs w-auto"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/spaceVegan/kbSpaceVegan2.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/spaceVegan/kbSpaceVegan2.png`}
            alt="Space vegan 2"
            className="two-sv abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/spaceVegan/kbSpaceVegan3.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/spaceVegan/kbSpaceVegan3.png`}
            alt="Space vegan 3"
            className="three-sv abs w-auto"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/spaceVegan/kbSpaceVegan4.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/spaceVegan/kbSpaceVegan4.png`}
            alt="Space vegan 4"
            className="four-sv abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/spaceVegan/kbSpaceVegan5.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/spaceVegan/kbSpaceVegan5.png`}
            alt="Space vegan 5"
            className="five-sv abs w-auto"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/spaceVegan/kbSpaceVegan6.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/spaceVegan/kbSpaceVegan6.png`}
            alt="Space vegan 6"
            className="six-sv abs w-auto"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/spaceVegan/kbSpaceVegan7.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/spaceVegan/kbSpaceVegan7.png`}
            alt="Space vegan 7"
            className="seven-sv abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/spaceVegan/kbSpaceVegan8.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/spaceVegan/kbSpaceVegan8.png`}
            alt="Space vegan 8"
            className="eight-sv abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/spaceVegan/kbSpaceVegan9.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/spaceVegan/kbSpaceVegan9.png`}
            alt="Space vegan 9"
            className="nine-sv abs w-auto"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/spaceVegan/kbSpaceVegan10.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/spaceVegan/kbSpaceVegan10.png`}
            alt="Space vegan 10"
            className="ten-sv abs"
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/spaceVegan/kbSpaceVegan11.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/spaceVegan/kbSpaceVegan11.png`}
            alt="Space vegan 11"
            className="eleven-sv abs w-auto"
          />
        </picture>
        <HeaderFolio bgColor="bg-transparent z-50" />
        <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden"></div>
      </TopScroll>
    </Layout>
  )
}

export default SpaceVeganPage
