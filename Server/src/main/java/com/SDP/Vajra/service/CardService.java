package com.SDP.Vajra.service;

import java.util.List;

import com.SDP.Vajra.model.Card;

public interface CardService {
	public Card saveCard(Card r,String phone);
	
	public Card findByCardNumber(String cardNumber);
	
	 public List<Card> getCardsByUserPhone(String phone);
}
