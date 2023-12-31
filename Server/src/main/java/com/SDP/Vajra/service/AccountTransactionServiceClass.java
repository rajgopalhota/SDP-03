package com.SDP.Vajra.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SDP.Vajra.model.AccountTransaction;
import com.SDP.Vajra.model.Card;
import com.SDP.Vajra.repository.AccountTransactionRepository;

@Service
public class AccountTransactionServiceClass implements AccountTransactionService {

    private AccountTransactionRepository transactionRepository;

    @Autowired
    public AccountTransactionServiceClass(AccountTransactionRepository transactionRepository) {
        this.transactionRepository = transactionRepository;
    }

    @Override
    public AccountTransaction createTransaction(AccountTransaction transaction) {
        return transactionRepository.save(transaction);
    }

    @Override
    public AccountTransaction getTransactionById(Long transactionId) {
        return transactionRepository.findById(transactionId).orElse(null);
    }
    
    @Override
    public AccountTransaction saveTransaction(AccountTransaction transaction) {
        return transactionRepository.save(transaction);
    }
    
    @Override
	public List<AccountTransaction> getAll() {
		try {
			return transactionRepository.findAll();
		} catch (Exception e) {
			return new ArrayList<>();
		}
	}
}
