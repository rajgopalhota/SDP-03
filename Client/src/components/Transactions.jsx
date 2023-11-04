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
              <div className="transaction-container col-md-10">
                <h3>Bank Statement</h3>
                <hr />
                <div>
                  <h4>
                    <i class="fa-solid fa-share"></i>&nbsp;Debited Transactions:
                  </h4>
                  <div className="d-flex flex-wrap justify-content-around">
                    {debitedTransactions.map((transaction) => (
                      <div
                        key={transaction.transactionId}
                        className="pay-glass-card p-3 m-2 flex-fill tilt-in-fwd-tr transactioncard"
                      >
                        <div
                          className="d-flex justify-content-between align-items-center paycard"
                          style={{ color: "red" }}
                        >
                          <div>
                            <i class="fa-solid fa-circle-down fa-fade"></i>
                            &nbsp;
                            <span>
                              Transaction: &#8377;{transaction.amount}
                            </span>
                            <br />
                            <span className="timestamp">
                              {transaction.transactionDateTime}
                            </span>
                            <br />
                            <p>
                              To: {transaction.toAccount}, Message:{" "}
                              {transaction.message}
                            </p>
                          </div>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                            alt="Visa logo"
                            style={{ width: "50px" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="mt-4">
                    <i class="fa-solid fa-share"></i>&nbsp;Credited
                    Transactions:
                  </h4>
                  <div className="d-flex flex-wrap justify-content-around">
                    {creditedTransactions.map((transaction) => (
                      <div
                        key={transaction.transactionId}
                        className="pay-glass-card p-3 m-2 flex-fill tilt-in-fwd-tr transactioncard"
                      >
                        <div
                          className="d-flex justify-content-between align-items-center paycard"
                          style={{ color: "#007032" }}
                        >
                          <div>
                            <i class="fa-solid fa-circle-up fa-fade"></i>
                            &nbsp;
                            <span>
                              Transaction: &#8377;{transaction.amount}
                            </span>
                            <br />
                            <span className="timestamp">
                              {transaction.transactionDateTime}
                            </span>
                            <br />
                            <p>
                              From: {transaction.fromAccount}, Message:{" "}
                              {transaction.message}
                            </p>
                          </div>
                          <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                            alt="Visa logo"
                            style={{ width: "50px" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
