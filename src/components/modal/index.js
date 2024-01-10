import React, { useRef } from "react";
import "./modalStyles.scss";
import { CloseIcon } from "../../assets/svgIcons";

export default function Modal({ visible, setVisible, children }) {
  const modalRef = useRef(null);

  return (
    <>
      {visible ? (
        <div
          className="modalContainer"
          onClick={(e) => {
            if (modalRef.current.contains(e.target)) {
              return;
            }
            setVisible(false);
          }}
        >
          <div className="children-container" ref={modalRef}>
            <CloseIcon
              className="closeIcon"
              onClick={() => setVisible(false)}
            />
            {children}
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
