package com.SDP.Vajra.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SDP.Vajra.model.Card;
import com.SDP.Vajra.repository.CardRepository;
import com.SDP.Vajra.repository.UserRespository;

@Service
public class CardServiceClass implements CardService {

	CardRepository cr;

	@Autowired
	UserRespository ur;

	public CardServiceClass() {
	}

	@Autowired
	public CardServiceClass(CardRepository cr) {
		super();
		this.cr = cr;
	}

	@Override
	public Card findByCardNumber(String cardNumber) {
		try {
			Card user = cr.findByCardNumber(cardNumber);
			if (user != null) {
				return user;
			} else {
				return null; // For this example, we return null if not found
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null; // Return null in case of an exception
		}
	}

	@Override
	public Card saveCard(Card r) {
		try {
			return cr.save(r);
		} catch (Exception e) {
			return null;
		}
	}

	@Override
	public List<Card> getAllCards() {
		try {
			return cr.findAll();
		} catch (Exception e) {
			return new ArrayList<>();
		}
	}

}
