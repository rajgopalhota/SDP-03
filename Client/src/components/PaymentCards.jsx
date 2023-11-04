import React, { useEffect, useState } from "react";
import { useAuth } from "../AuthContext";
import UrlHelper from "./../UrlHelper";

export default function PaymentCards() {

  const auth = useAuth();
  const [debitedTransactions, setDebitedTransactions] = useState([]);
  const [creditedTransactions, setCreditedTransactions] = useState([]);

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await UrlHelper.get("/allTransactions");

      if (response.status === 200) {
        const data = await response.data;
        console.log(data)
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
      <div className="col-lg-3 col-sm-12 flex-wrap p-4 right-panel paymentcards">
        <div className="pay-glass-card p-4 m-2 flex-fill tilt-in-fwd-tr">
          <h5 className="card-title">
            <i className="fa-solid fa-user-lock"></i> {auth.user.firstName}
          </h5>
          <div className="loginbutton">
            <button data-toggle="modal">
              <i className="fa-solid fa-wallet fa-flip"></i> Get Balance
            </button>
          </div>
          {/* <p className="card-text">
            Your current balance is:
            <br /> &#8377; 1,00,000.00
          </p> */}
        </div>

        {/* Display debited transactions */}
        {debitedTransactions.map((transaction) => (
          <div
            key={transaction.transactionId}
            className="pay-glass-card p-3 m-2 flex-fill tilt-in-fwd-tr"
          >
            <div className="d-flex justify-content-between align-items-center paycard" style={{ color: 'red' }}>
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: &#8377;{transaction.amount}</span><br/>
                <span className="timestamp">{transaction.transactionDateTime}</span>
              </div>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1280px-Visa_Inc._logo.svg.png"
                alt="Visa logo"
                style={{ width: "50px" }}
              />
            </div>
          </div>
        ))}

        {/* Display credited transactions */}
        {creditedTransactions.map((transaction) => (
          <div
            key={transaction.transactionId}
            className="pay-glass-card p-3 m-2 flex-fill tilt-in-fwd-tr"
          >
            <div className="d-flex justify-content-between align-items-center paycard" style={{ color: '#007032' }}>
              <div>
                <i className="fa-solid fa-arrow-right-arrow-left fa-fade"></i>
                &nbsp;
                <span>Transaction: &#8377;{transaction.amount}</span><br/>
                <span className="timestamp">{transaction.transactionDateTime}</span>
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
    </>
  );
}