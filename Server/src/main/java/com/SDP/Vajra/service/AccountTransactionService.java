package com.SDP.Vajra.service;

import java.util.List;

import com.SDP.Vajra.model.AccountTransaction;

public interface AccountTransactionService {
    public AccountTransaction createTransaction(AccountTransaction transaction);
    public AccountTransaction getTransactionById(Long transactionId);
    public AccountTransaction saveTransaction(AccountTransaction transaction);
    public List<AccountTransaction> getAll();
}
