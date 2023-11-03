import React, { useState } from "react";

const PaymentForm = () => {
  const [mpin, setMpin] = useState("");

  const handleMpinChange = (e) => {
    // Get the input value without spaces and limit it to 4 digits
    const newValue = e.target.value.replace(/\s/g, "").slice(0, 4);
    setMpin(newValue);
  };

  const handleConfirm = () => {
    console.log("MPIN:", mpin);
  };

  return (
    <>
      <div
        className="modal fade"
        tabIndex="-5"
        role="dialog"
        id="paymentmodal"
        aria-labelledby="myLargeModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content paymentmodal">
            <div className="modal-header">
              <h5 className="modal-title">Enter MPIN</h5>
              <button type="button" className="close">
                <span>×</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="number"
                className="form-control"
                value={mpin}
                onChange={handleMpinChange}
                placeholder="Enter MPIN"
              />
            </div>
            <div className="modal-footer loginbutton bodybtn">
              <button type="button" onClick={handleConfirm}>
                <i className="fas fa-check-circle"></i> Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
