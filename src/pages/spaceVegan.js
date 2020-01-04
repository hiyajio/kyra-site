import React from "react"

import Header from "../components/Header/index.js"
import TopScroll from "../components/TopScroll/index.js"
import Footer from "../components/Footer/index.js"

const GrandmasCouchPage = props => {
  return (
    <div className="flex">
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
              height: "auto",
              width: "32rem",
              left: "44rem",
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
              top: "58rem",
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
              top: "80rem",
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
              top: "98rem",
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
              left: "8rem",
              top: "118rem",
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
              left: "46rem",
              top: "145rem",
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
              height: "auto",
              width: "32rem",
              left: "30rem",
              top: "170rem",
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
              width: "32rem",
              left: "6rem",
              top: "190rem",
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
              height: "36rem",
              width: "auto",
              left: "47rem",
              top: "206rem",
              marginBottom: "5rem",
            }}
          />
        </picture>
        <Header bgColor="bg-transparent z-50" />
        <div className="flex-1 bg-white font-body h-screen w-2/5 overflow-hidden"></div>
        <Footer />
      </TopScroll>
    </div>
  )
}

export default GrandmasCouchPage
