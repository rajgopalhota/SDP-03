package com.SDP.Vajra.model;

import jakarta.persistence.*;

@Entity
@Table(name = "card")
public class Card {
	@Id
	@Column(name = "cardNumber", unique = true)
	private String cardNumber;
	@Column(name = "cardName")
	private String cardName;
	@Column(name = "cardMonth")
	private String cardMonth;
	@Column(name = "cardYear")
	private String cardYear;
	@Column(name = "cardCvv")
	private String cardCvv;
	@Column(name = "phone")
	private String phone;

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public Card() {
	}

	public Card(String cardNumber, String cardName, String cardMonth, String cardYear, String cardCvv, String phone) {
		super();
		this.cardNumber = cardNumber;
		this.cardName = cardName;
		this.cardMonth = cardMonth;
		this.cardYear = cardYear;
		this.cardCvv = cardCvv;
		this.phone = phone;
	}

	public String getCardNumber() {
		return cardNumber;
	}

	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}

	public String getCardName() {
		return cardName;
	}

	public void setCardName(String cardName) {
		this.cardName = cardName;
	}

	public String getCardMonth() {
		return cardMonth;
	}

	public void setCardMonth(String cardMonth) {
		this.cardMonth = cardMonth;
	}

	public String getCardYear() {
		return cardYear;
	}

	public void setCardYear(String cardYear) {
		this.cardYear = cardYear;
	}

	public String getCardCvv() {
		return cardCvv;
	}

	public void setCardCvv(String cardCvv) {
		this.cardCvv = cardCvv;
	}

}
