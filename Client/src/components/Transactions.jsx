import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import UrlHelper from "./../UrlHelper";
import bankLoad from "./../assets/gifs/agreement.gif";

export default function Transactions() {
  const auth = useAuth();
  const [debitedTransactions, setDebitedTransactions] = useState([]);
  const [creditedTransactions, setCreditedTransactions] = useState([]);

  useEffect(() => {
    if (auth.user) {
      fetchTransactions();
    }
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await UrlHelper.get("/allTransactions");

      if (response.status === 200) {
        const data = await response.data;
        console.log(data);
        const debited = data.filter(
          (transaction) => transaction.fromAccount === auth.user.phone
        );
        const credited = data.filter(
          (transaction) => transaction.toAccount === auth.user.phone
        );

        setDebitedTransactions(debited.reverse());
        setCreditedTransactions(credited.reverse());
      } else {
        console.error(
          "Failed to fetch transactions. Server responded with status code: " +
            response.status
        );
        if (response.status === 404) {
          setDebitedTransactions([]);
          setCreditedTransactions([]);
        }
      }
    } catch (error) {
      console.error("Error while fetching transactions:", error);
    }
  };

  return (
    <>
      {!auth.user && (
        <div className="text-center">
          <h2 className="puff-in-center">
            You need to Login to work with payments!&nbsp;
            <i className="fa-solid fa-money-check-dollar fa-bounce"></i>
          </h2>
          <img className="img-fluid bankLoad" src={bankLoad} alt="bank load" />
        </div>
      )}
      {auth.user && (
        <>
          <div className="transactionsection tilt-in-fwd-br">
            <div className="d-flex justify-content-center">
              <div className="transaction-container col-md-8">
                <h3>Bank Statement</h3>
                <hr />
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="accountNo">Account No</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-credit-card"></i>
                          </span>
                        </div>
                        <select id="accountNo" className="form-control">
                          <option>{auth.user.phone}</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="formatType">Format Type</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-file-excel"></i>
                          </span>
                        </div>
                        <select
                          id="formatType"
                          className="form-control"
                        >
                          <option value="PDF">PDF</option>
                          <option value="Excel">Excel</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="transactionFor">Transaction For</label>
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
                      <label htmlFor="orderBy">Order By</label>
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
                        Select the transaction history which you want
                      </label>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="fromDate">From Date</label>
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
                      <label htmlFor="toDate">To Date</label>
                      <div className="input-group">
                        <div className="input-group-prepend">
                          <span className="input-group-text">
                            <i className="fas fa-calendar"></i>
                          </span>
                        </div>
                        <input
                          type="date"
                          className="form-control"
                          id="toDate"
                        />
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
                        <label
                          className="form-check-label"
                          htmlFor="rightRadio"
                        >
                          <i className="fas fa-file-alt"></i> Use Customized
                          Account Statement
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-12 text-center loginbutton bodybtn">
                      <button type="button">
                        <i className="fas fa-magic"></i> Generate
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
