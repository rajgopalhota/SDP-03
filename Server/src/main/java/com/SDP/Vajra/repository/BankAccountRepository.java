package com.SDP.Vajra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SDP.Vajra.model.BankAccount;
import com.SDP.Vajra.model.User;

@Repository
public interface BankAccountRepository extends JpaRepository<BankAccount, Long> {
	BankAccount findByPhone(String phone);
}

