package com.SDP.Vajra.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.SDP.Vajra.model.Card;

public interface CardRepository extends JpaRepository<Card, String>{
	Card findByCardNumber(String cardNumber);
	List<Card> findByUserPhone(String phone);
}
