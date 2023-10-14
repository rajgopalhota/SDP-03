package com.SDP.Vajra.service;

import java.util.List;

import com.SDP.Vajra.model.Card;

public interface CardService {
	public Card saveCard(Card r);

	public Card findByCardNumber(String cardNumber);

	public List<Card> getAllCards();

}
