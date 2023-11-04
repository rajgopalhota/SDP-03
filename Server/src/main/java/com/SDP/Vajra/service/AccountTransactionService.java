package com.SDP.Vajra.service;

import com.SDP.Vajra.model.AccountTransaction;

public interface AccountTransactionService {
	Transaction saveTransaction(Transaction transaction);
    Transaction getTransactionById(Long transactionId);
}
