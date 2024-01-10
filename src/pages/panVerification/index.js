import React, { useState } from "react";
import Modal from "../../components/modal";
import { BadgeIcon } from "../../assets/svgIcons";
import "./panVefification.scss";
import TextFeild from "../../components/TextFeild/Index";
import CustomButton from "../../components/button";
import DummyPanImage from "../../assets/Images/dummyPan.png";
const PanVerification = () => {
  const [visible, setVisible] = useState(true);
  const [panNumber, setPanNumber] = useState("");
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    const value = e.target.value;
    if (value.length > 10) {
      setError(true);
    } else {
      setError(false);
      setPanNumber(value);
    }
  };
  const handleClick = () => {
    let regex = new RegExp(/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/);
    if (regex.test(panNumber.toUpperCase()) === true) {
      setError(false);
    } else {
      setError(true);
    }
  };
  return (
    <div className="container">
      <div className="modal-btn-open">
        <CustomButton
          onClick={() => {
            setVisible(true);
          }}
          label="Open Modal"
          disabled={false}
        />
      </div>
      <Modal visible={visible} setVisible={setVisible}>
        <div className="pan-verification-container">
          <div className="modal-header">
            <h2 className="mb-header">PAN Verification</h2>
            <div className="modal-header-container">
              <div className="modal-header-icon">
                <BadgeIcon />
              </div>

              <div className="modal-header-content">
                <h2>PAN Verification</h2>
                <p>
                  As per regulations, it is mandatory to verify your PAN
                  details.
                </p>
              </div>
            </div>
          </div>
          <div className="pan-details-container">
            <div className="pan-image-container">
              <img src={DummyPanImage} alt="pan" />
            </div>
            <div className="pan-details">
              <TextFeild
                label="Enter 10-digit PAN"
                value={panNumber}
                onChange={handleChange}
                error={error}
              />
              <CustomButton
                onClick={handleClick}
                label="verify"
                disabled={panNumber.length ? false : true}
              />
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default PanVerification;
