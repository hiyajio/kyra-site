import React from "react"
import styled from "styled-components"

const ModalWrapper = styled.div`
  .overlay:target {
    visibility: visible;
    opacity: 1;
    z-index: 50;
  }
`

const Modal = props => {
  return (
    <ModalWrapper>
      <div
        id={props.linkedTo}
        className="overlay inset-0 absolute invisible opacity-0"
        style={{
          background: "rgba(0, 0, 0, 0.5)",
          transition: "opacity 200ms",
        }}
      >
        <a className="absolute cursor-default h-full w-full" href="#"></a>
        <div className="rounded border-gray-500 outline-none shadow relative bg-white w-full my-8 p-5 max-w-4xl mx-auto">
          <picture>
            <source srcset={props.modalImg} type="image/webp" />
            <img src={props.modalAlt} alt={props.modalImgAlt} />
          </picture>
        </div>
      </div>
    </ModalWrapper>
  )
}

export default Modal
