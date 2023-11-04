package com.SDP.Vajra.model;

import jakarta.persistence.*;

@Entity
@Table(name = "account_transaction")
public class AccountTransaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transaction_id")
    private Long transactionId;
    
    @Column(name = "from_account")
    private String fromAccount; 
    
    @Column(name = "to_account")
    private String toAccount;  
    
    private double amount;
    
	@Column(name = "credit_debit")
    private String creditDebit;
    
    @Column(name = "transaction_date_time")
    private String transactionDateTime;

    private String senderAccount;

    private String receiverAccount;
    
    private String message;
    
    public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public Long getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(Long transactionId) {
		this.transactionId = transactionId;
	}

	public String getFromAccount() {
		return fromAccount;
	}

	public void setFromAccount(String fromAccount) {
		this.fromAccount = fromAccount;
	}

	public String getToAccount() {
		return toAccount;
	}

	public void setToAccount(String toAccount) {
		this.toAccount = toAccount;
	}

	public double getAmount() {
		return amount;
	}

	public void setAmount(double amount) {
		this.amount = amount;
	}

	public String getCreditDebit() {
		return creditDebit;
	}

	public void setCreditDebit(String creditDebit) {
		this.creditDebit = creditDebit;
	}

	public String getTransactionDateTime() {
		return transactionDateTime;
	}

	public void setTransactionDateTime(String transactionDateTime) {
		this.transactionDateTime = transactionDateTime;
	}

	public String getSenderAccount() {
		return senderAccount;
	}

	public void setSenderAccount(String senderAccount) {
		this.senderAccount = senderAccount;
	}

	public String getReceiverAccount() {
		return receiverAccount;
	}

	public void setReceiverAccount(String receiverAccount) {
		this.receiverAccount = receiverAccount;
	}
	
	public AccountTransaction() {}

	public AccountTransaction(Long transactionId, String fromAccount, String toAccount, double amount,
			String creditDebit, String transactionDateTime, String senderAccount,
			String receiverAccount, String message) {
		super();
		this.transactionId = transactionId;
		this.fromAccount = fromAccount;
		this.toAccount = toAccount;
		this.amount = amount;
		this.creditDebit = creditDebit;
		this.transactionDateTime = transactionDateTime;
		this.senderAccount = senderAccount;
		this.receiverAccount = receiverAccount;
		this.message = message;
	}

}
