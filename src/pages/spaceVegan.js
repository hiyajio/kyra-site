import React from "react"

import Layout from "../components/Layout/index.js"
import HeaderFolio from "../components/HeaderFolio/index.js"
import TopScroll from "../components/TopScroll/index.js"

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
            style={{
              position: "absolute",
              height: "40rem",
              width: "auto",
              left: "56rem",
              top: "6rem",
            }}
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
            style={{
              position: "absolute",
              height: "auto",
              width: "36rem",
              left: "22rem",
              top: "18rem",
            }}
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
            style={{
              position: "absolute",
              height: "32rem",
              width: "auto",
              left: "38rem",
              top: "40rem",
            }}
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
            style={{
              position: "absolute",
              height: "auto",
              width: "40rem",
              left: "2rem",
              top: "65rem",
            }}
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
            style={{
              position: "absolute",
              height: "36rem",
              width: "auto",
              left: "40rem",
              top: "87rem",
            }}
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
            style={{
              position: "absolute",
              height: "32rem",
              width: "auto",
              left: "66rem",
              top: "105rem",
            }}
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
            style={{
              position: "absolute",
              height: "auto",
              width: "40rem",
              left: "4rem",
              top: "129rem",
            }}
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
            style={{
              position: "absolute",
              height: "auto",
              width: "36rem",
              left: "52rem",
              top: "152rem",
            }}
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
            style={{
              position: "absolute",
              height: "34rem",
              width: "auto",
              left: "30rem",
              top: "174rem",
            }}
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
            style={{
              position: "absolute",
              height: "auto",
              width: "36rem",
              left: "5rem",
              top: "206rem",
            }}
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
            style={{
              position: "absolute",
              height: "40rem",
              width: "auto",
              left: "47rem",
              top: "213rem",
              paddingBottom: "5rem",
            }}
          />
        </picture>
        <HeaderFolio bgColor="bg-transparent z-50" />
        <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden"></div>
      </TopScroll>
    </Layout>
  )
}

export default SpaceVeganPage
