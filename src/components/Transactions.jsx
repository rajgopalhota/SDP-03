import React from "react";

export default function Transactions() {
  return (
    <>
      <div className="transactionsection">
        <div className="d-flex justify-content-center">
          <div className="transaction-container col-md-8">
            <h3>Bank Statement</h3>
            <hr />
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="accountNo">
                    Account No
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-credit-card"></i>
                      </span>
                    </div>
                    <select id="accountNo" className="form-control">
                      <option>Account 1</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="formatType">
                     Format Type
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-file-excel"></i>
                      </span>
                    </div>
                    <select id="formatType" className="form-control">
                      <option>PDF</option>
                      <option>Excel</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="transactionFor">
                   Transaction For
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-calendar"></i>
                      </span>
                    </div>
                    <select id="transactionFor" className="form-control">
                      <option>specified period</option>
                      <option>customized period</option>
                    </select>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="orderBy">
                     Order By
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-sort-amount-up"></i>
                      </span>
                    </div>
                    <select id="orderBy" className="form-control">
                      <option>Ascending</option>
                      <option>Descending</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <label htmlFor="dateRange">
                   Select the transaction
                    history which you want
                  </label>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="fromDate">
                    From Date
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-calendar"></i>
                      </span>
                    </div>
                    <input
                      type="date"
                      className="form-control"
                      id="fromDate"
                    />
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="toDate">
                     To Date
                  </label>
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <span className="input-group-text">
                        <i className="fas fa-calendar"></i>
                      </span>
                    </div>
                    <input type="date" className="form-control" id="toDate" />
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioOptions"
                      id="leftRadio"
                      value="left"
                    />
                    <label className="form-check-label" htmlFor="leftRadio">
                      <i className="fas fa-file-alt"></i> Default Account
                      Statement
                    </label>
                  </div>
                </div>
                <div className="form-group col-md-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="radioOptions"
                      id="rightRadio"
                      value="right"
                    />
                    <label className="form-check-label" htmlFor="rightRadio">
                      <i className="fas fa-file-alt"></i> Use Customized Account
                      Statement
                    </label>
                  </div>
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12 text-center loginbutton bodybtn">
                  <button type="submit">
                    <i className="fas fa-magic"></i> Generate
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
