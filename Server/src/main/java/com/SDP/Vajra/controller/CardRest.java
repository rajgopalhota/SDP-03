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

@CrossOrigin("http://localhost:3000")
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
		
		
		 @PostMapping("/cards/{phone}")
		    public ResponseEntity<Card> createCard(@RequestBody Card card, @PathVariable String phone) {
		        Card createdCard = cs.saveCard(card, phone);
		        return new ResponseEntity<>(createdCard, HttpStatus.CREATED);
		    }

		 @GetMapping("/retrieve/{phone}")
		 public ResponseEntity<List<Card>> getUserCards(@PathVariable String phone) {
		     List<Card> userCards = cs.getCardsByUserPhone(phone);

		     if (userCards.isEmpty()) {
		         return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		     }

		     return new ResponseEntity<>(userCards, HttpStatus.OK);
		 }


		
		
}
