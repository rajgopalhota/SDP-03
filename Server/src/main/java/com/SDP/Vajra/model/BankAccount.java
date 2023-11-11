package com.SDP.Vajra.model;

import jakarta.persistence.*;

@Entity
@Table(name = "bank_account")
public class BankAccount {
	@Id
	@Column(name = "phone_number")
	private String phone;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "user_id")
	private User user;

	@Column(name = "balance")
	private double balance;

	@Column(name = "creation_date")
	private String creationDate;

	public BankAccount() { 
	}

	public BankAccount(String phone, User user, double balance, String creationDate) {
		super();
		this.phone = phone;
		this.user = user;
		this.balance = balance;
		this.creationDate = creationDate;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public String getPhoneNumber() {
		return phone;
	}

	public void setPhoneNumber(String phone) {
		this.phone = phone;
	}

	public double getBalance() {
		return balance;
	}

	public void setBalance(double balance) {
		this.balance = balance;
	}

	public String getCreationDate() {
		return creationDate;
	}

	public void setCreationDate(String creationDate) {
		this.creationDate = creationDate;
	}
}
