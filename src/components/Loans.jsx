import React from 'react'

export default function Loans() {
  return (
    <>
    <section className="loansection tilt-in-fwd-br">
      <div className="loan-container">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12">
              <div className="form-container p-4">
                <h3><i className="fa-solid fa-rectangle-list fa-bounce"></i> Loan Application Form</h3>
                <hr />
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="accountNumber">Bank Account Number</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"
                            ><i className="fas fa-university"></i
                          ></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="accountNumber"
                          placeholder="Bank Account Number"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="holderName">Bank Holder's Name</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"
                            ><i className="fas fa-user"></i
                          ></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="holderName"
                          placeholder="Bank Holder's Name"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="mobileNumber">Mobile Number</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"
                            ><i className="fas fa-mobile-alt"></i
                          ></span>
                        </div>
                        <input
                          type="tel"
                          className="form-control"
                          id="mobileNumber"
                          placeholder="Mobile Number"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="dob">Date of Birth</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"
                            ><i className="fas fa-birthday-cake"></i
                          ></span>
                        </div>
                        <input type="date" className="form-control" id="dob" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="typepfloans">Loan Type</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"
                          ><i className="fa-solid fa-scale-unbalanced-flip"></i></span>
                      </div>
                      <select id="typepfloans" className="form-control">
                        <option selected>Choose...</option>
                        <option>Home Loan</option>
                        <option>Car Loan</option>
                        <option>Gold Loan</option>
                        <option>Personal Loan</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="fileInput1" className="filein"
                        ><i className="fas fa-id-card"></i>&nbsp; Aadhar Card</label
                      >
                      <input
                        type="file"
                        className="form-control-file"
                        id="fileInput1"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="fileInput2" className="filein"
                        ><i className="fas fa-file-alt"></i>&nbsp; Valid Proof to
                        Loan</label
                      >
                      <input
                        type="file"
                        className="form-control-file"
                        id="fileInput2"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="installments">Installments</label>
                    <div className="input-group">
                      <div className="input-group-prepend">
                        <span className="input-group-text"
                          ><i className="fas fa-calendar-alt"></i
                        ></span>
                      </div>
                      <select id="installments" className="form-control">
                        <option selected>Choose...</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="nominee1Name">Nominee 1 Name</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"
                            ><i className="fas fa-user-friends"></i
                          ></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="nominee1Name"
                          placeholder="Nominee 1 Name"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="nominee1MobileNumber">Nominee 1 Phone</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"
                            ><i className="fas fa-phone"></i
                          ></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="nominee1MobileNumber"
                          placeholder="Nominee 1 Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="Nominee1fileInput1" className="filein"
                        ><i className="fas fa-id-card"></i>&nbsp; Aadhar card</label
                      >
                      <input
                        type="file"
                        className="form-control-file"
                        id="Nominee1fileInput1"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="Nominee1fileInput2" className="filein"
                        ><i className="fas fa-id-card"></i>&nbsp; Pan Card</label
                      >
                      <input
                        type="file"
                        className="form-control-file"
                        id="Nominee1fileInput2"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="nominee2Name">Nominee 2 Name</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"
                            ><i className="fas fa-user-friends"></i
                          ></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="nominee2Name"
                          placeholder="Nominee 1 Name"
                        />
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="nominee2MobileNumber">Nominee 2 Phone</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text"
                            ><i className="fas fa-phone"></i
                          ></span>
                        </div>
                        <input
                          type="text"
                          className="form-control"
                          id="nominee2MobileNumber"
                          placeholder="Nominee 1 Mobile Number"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="Nominee2fileInput2" className="filein"
                        ><i className="fas fa-id-card"></i>&nbsp; Aadhar card</label
                      >
                      <input
                        type="file"
                        className="form-control-file"
                        id="Nominee2fileInput2"
                      />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="Nominee2fileInput3" className="filein"
                        ><i className="fas fa-id-card"></i>&nbsp; Pan Card</label
                      >
                      <input
                        type="file"
                        className="form-control-file"
                        id="Nominee2fileInput3"
                      />
                    </div>
                  </div>
                  <div className="text-center loginbutton bodybtn">
                    <button type="submit">
                        <i className="fa-solid fa-clipboard-check fa-lg"></i>&nbsp; Apply
                    </button>
                  </div>
                  {/* <!-- Add the remaining fields here --> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}
