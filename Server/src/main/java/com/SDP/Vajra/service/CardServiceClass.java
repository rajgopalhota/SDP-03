package com.SDP.Vajra.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SDP.Vajra.model.Card;
import com.SDP.Vajra.model.User;
import com.SDP.Vajra.repository.CardRepository;
import com.SDP.Vajra.repository.UserRespository;

@Service
public class CardServiceClass implements CardService{

	CardRepository cr;
	
	@Autowired
	UserRespository ur;
	
	public CardServiceClass() { }
	
	
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
	public Card saveCard(Card r, String phone){
	    try {
	        User user = ur.findByPhone(phone);

	        if (user != null) {
	            r.setUser(user);
	            user.getCards().add(r); // Add the card to the user's list of cards
	            ur.save(user);
	            return cr.save(r);
	        } else {
	            return null;
	        }
	    } catch (Exception e) {
	        // Handle the exception here or rethrow it
	        return null;
	    }
	}


	@Override
	public List<Card> getCardsByUserPhone(String phone) {
		return cr.findByUserPhone(phone);
	}


}
