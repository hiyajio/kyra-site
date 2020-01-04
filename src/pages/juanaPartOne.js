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
            srcset={`../../images/collections/juanaPartOne/kbJuana1.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaPartOne/kbJuana1.png`}
            alt="Juana part one 1"
            style={{
              position: "absolute",
              height: "40rem",
              width: "auto",
              left: "10rem",
              top: "6rem",
            }}
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaPartOne/kbJuana2.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaPartOne/kbJuana2.png`}
            alt="Juana part one 2"
            style={{
              position: "absolute",
              height: "36rem",
              width: "auto",
              left: "36rem",
              top: "20rem",
            }}
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaPartOne/kbJuana3.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaPartOne/kbJuana3.png`}
            alt="Juana part one 3"
            style={{
              position: "absolute",
              height: "32rem",
              width: "auto",
              left: "66rem",
              top: "38rem",
            }}
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaPartOne/kbJuana4.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaPartOne/kbJuana4.png`}
            alt="Juana part one 4"
            style={{
              position: "absolute",
              height: "40rem",
              width: "auto",
              left: "46rem",
              top: "62rem",
            }}
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaPartOne/kbJuana5.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaPartOne/kbJuana5.png`}
            alt="Juana part one 5"
            style={{
              position: "absolute",
              height: "32rem",
              width: "auto",
              left: "26rem",
              top: "88rem",
              marginBottom: "5rem",
            }}
          />
        </picture>
        <picture>
          <source
            srcset={`../../images/collections/juanaPartOne/kbJuana6.webp`}
            type="image/webp"
          />
          <img
            src={`../../images/collections/juanaPartOne/kbJuana6.png`}
            alt="Juana part one 6"
            style={{
              position: "absolute",
              height: "36rem",
              width: "auto",
              left: "4rem",
              top: "80rem",
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
