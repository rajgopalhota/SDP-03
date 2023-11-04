import React, { useState } from "react";
import UrlHelper from "./../UrlHelper";
import { toast } from "react-toastify";
import { useAuth } from "../AuthContext";

const PaymentForm = ({ phoneNumber, amount, msg }) => {
  const auth = useAuth();
  const [mpin, setMpin] = useState("");

  function getCurrentDateTimeString() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0'); // Month is 0-based
    const day = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    return `${year}-${month}-${day}, ${hours}:${minutes}:${seconds}`;
  }

  const handleMpinChange = (e) => {
    const newValue = e.target.value.replace(/\s/g, "").slice(0, 4);
    setMpin(newValue);
  };

  const handleConfirm = async () => {
    if (auth.user.mpin === mpin) {
      const requestData = {
        senderAccount: auth.user.phone,
        receiverAccount: phoneNumber,
        amount: parseFloat(amount),
        message: msg,
        transactionDateTime: getCurrentDateTimeString()
      };

      try {
        const response = await UrlHelper.post("/makeTransaction", requestData);
        window.location.reload();
      } catch (error) {
        console.error(error);
        toast("Some error occured, Maybe check your balance!");
      }
    } else {
      toast("Invalid MPIN");
    }
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
                </div>
                <div className="modal-body">
                  <p>
                    Are you sure to have transaction with {phoneNumber} of
                    amount: {amount} for {msg}
                  </p>
                  <input
                    type="number"
                    className="form-control"
                    value={mpin}
                    onChange={handleMpinChange}
                    placeholder="Enter MPIN"
                  />
                </div>
                {auth.user && (
                  <div className="modal-footer loginbutton bodybtn">
                    <button type="button" onClick={handleConfirm}>
                      <i className="fas fa-check-circle"></i> Confirm
                    </button>
                  </div>
                )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
