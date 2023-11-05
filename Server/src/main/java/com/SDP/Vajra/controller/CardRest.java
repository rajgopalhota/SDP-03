package com.SDP.Vajra.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.SDP.Vajra.model.Card;
import com.SDP.Vajra.model.User;
import com.SDP.Vajra.service.CardService;
import com.SDP.Vajra.service.UserService;

@CrossOrigin("*")
@RestController
public class CardRest {

	CardService cs;

	@Autowired
	UserService us;

	@Autowired
	public CardRest(CardService cs) {
		super();
		this.cs = cs;
	}

	@PostMapping("/addcard")
	public ResponseEntity<Card> createCard(@RequestBody Card card) {
		Card createdCard = cs.saveCard(card);
		return new ResponseEntity<>(createdCard, HttpStatus.CREATED);
	}

	@GetMapping("/allcards")
	public ResponseEntity<List<Card>> getAllCards() {
		try {
			List<Card> cards = cs.getAllCards();
			return new ResponseEntity<>(cards, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
