package com.SDP.Vajra.service;

import com.SDP.Vajra.model.BankAccount;

public interface BankAccountService {
    public BankAccount createBankAccount(BankAccount bankAccount, Long userId);
    public BankAccount updateBankAccount(BankAccount bankAccount);
    public BankAccount getBankAccountByPhoneNumber(String phoneNumber);
}
