import React, { useState } from "react";
import PayConfirm from "./PayConfirm"

export default function Payment() {
  const [selectedForm, setSelectedForm] = useState("quickPay");
  return (
    <>
      <div className="row h-100">
        <div className="col-lg-9 col-sm-12  paymentmodule tilt-in-fwd-br">
          <div className="slider">
            <button
              className={selectedForm === "quickPay" ? "active" : ""}
              onClick={() => setSelectedForm("quickPay")}
            >
              Quick Pay
            </button>
            <i className="fas fa-exchange-alt fa-2x"></i>
            <button
              className={selectedForm === "bankTransfer" ? "active" : ""}
              onClick={() => setSelectedForm("bankTransfer")}
            >
              Bank Transfer
            </button>
          </div>

          {selectedForm === "quickPay" ? (
            <div className="container">
              <div className="glass-card-payment mt-5 p-4 m-2 flex-fill mx-auto">
                <h3>Quick Pay</h3>
                <form>
                  <div className="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-phone-alt"></i>
                        </span>
                      </div>
                      <input
                        type="tel"
                        className="form-control"
                        id="phoneNumber"
                        name="phoneNumber"
                        placeholder="Enter phone number"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="amount">Amount</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-money-bill-wave"></i>
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="amount"
                        name="amount"
                        placeholder="Enter amount"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="category">Category/Message</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-comments"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="category"
                        name="category"
                        placeholder="Enter category or message"
                      />
                    </div>
                  </div>
                  <div className="text-center loginbutton bodybtn">
                    <button type="button" data-toggle="modal" data-target="#paymentmodal">
                      <i className="fa fa-paper-plane"></i>&nbsp;Transfer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="glass-card-payment mt-5 p-4 m-2 flex-fill mx-auto">
                <h3>Bank Transfer Form</h3>
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-5">
                      <label htmlFor="senderAccountNumber">
                        Sender's Account Number
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="senderAccountNumber"
                          name="senderAccountNumber"
                        />
                      </div>
                    </div>
                    <div className="col-md-2 text-center my-auto">
                      <i className="fas fa-exchange-alt fa-2x"></i>
                    </div>
                    <div className="form-group col-md-5">
                      <label htmlFor="receiverAccountNumber">
                        Receiver's Account Number
                      </label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-user"></i>
                          </span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="receiverAccountNumber"
                          name="receiverAccountNumber"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="receiverIFSC">Receiver's IFSC Code</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-university"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="receiverIFSC"
                        name="receiverIFSC"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="receiverName">Receiver's Name</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fas fa-user"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="receiverName"
                        name="receiverName"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="transferAmount">Transfer Amount</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text">
                          <i className="fa-solid fa-indian-rupee-sign"></i>
                        </span>
                      </div>
                      <input
                        type="number"
                        className="form-control"
                        id="transferAmount"
                        name="transferAmount"
                      />
                    </div>
                  </div>
                  <div className="text-center loginbutton bodybtn">
                    <button type="submit">
                      <i className="fa fa-paper-plane"></i>&nbsp;Transfer
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
        <div className="col-lg-3 col-sm-12 flex-wrap p-4 right-panel paymentcards">
          <div className="pay-glass-card p-4 m-2 flex-fill tilt-in-fwd-tr">
            <h5 className="card-title">
              <i className="fa-solid fa-user-lock"></i> RAJGOPAL
            </h5>
            <div className="loginbutton">
              <button data-toggle="modal">
                <i className="fa-solid fa-wallet fa-flip"></i> Get Balance
              </button>
            </div>
            <p className="card-text">
              Your current balance is:
              <br /> &#8377; 1,00,000.00
            </p>
          </div>

          <div className="pay-glass-card p-3 m-2 flex-fill tilt-in-fwd-tr">
            <div className="d-flex justify-content-between align-items-center paycard">
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: -700</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>
          {/* <!-- one card --> */}

          {/* <!-- populated cards --> */}

          <div className="pay-glass-card p-3 m-2 flex-fill tilt-in-fwd-tr">
            <div className="d-flex justify-content-between align-items-center paycard">
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: +500</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="pay-glass-card p-3 m-2 flex-fill tilt-in-fwd-tr">
            <div className="d-flex justify-content-between align-items-center paycard">
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: +500</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="pay-glass-card p-3 m-2 flex-fill tilt-in-fwd-tr">
            <div className="d-flex justify-content-between align-items-center paycard">
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: -5000</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="pay-glass-card p-3 m-2 flex-fill tilt-in-fwd-tr">
            <div className="d-flex justify-content-between align-items-center paycard">
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: -50</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="pay-glass-card p-3 m-2 flex-fill tilt-in-fwd-tr">
            <div className="d-flex justify-content-between align-items-center paycard">
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: +5000</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="pay-glass-card p-3 m-2 flex-fill tilt-in-fwd-tr">
            <div className="d-flex justify-content-between align-items-center paycard">
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: +2489</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="pay-glass-card p-3 m-2 flex-fill">
            <div className="d-flex justify-content-between align-items-center paycard">
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: +500</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="pay-glass-card p-3 m-2 flex-fill">
            <div className="d-flex justify-content-between align-items-center paycard">
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: +500</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="pay-glass-card p-3 m-2 flex-fill">
            <div className="d-flex justify-content-between align-items-center paycard">
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: -5000</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="pay-glass-card p-3 m-2 flex-fill">
            <div className="d-flex justify-content-between align-items-center paycard">
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: -50</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="pay-glass-card p-3 m-2 flex-fill">
            <div className="d-flex justify-content-between align-items-center paycard">
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: +5000</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>
          <div className="pay-glass-card p-3 m-2 flex-fill">
            <div className="d-flex justify-content-between align-items-center paycard">
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: +2489</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>

          {/* <!-- populated cards ends --> */}

          {/* <!-- Add more cards as needed --> */}
        </div>
      </div>
      <PayConfirm />
    </>
  );
}
