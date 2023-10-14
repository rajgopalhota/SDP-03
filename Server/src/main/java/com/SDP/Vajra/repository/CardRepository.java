package com.SDP.Vajra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.SDP.Vajra.model.Card;

public interface CardRepository extends JpaRepository<Card, String> {
	Card findByCardNumber(String cardNumber);
}
