package com.SDP.Vajra.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SDP.Vajra.model.BankAccount;
import com.SDP.Vajra.repository.BankAccountRepository;

@Service
public class BankAccountServiceClass implements BankAccountService {

    private BankAccountRepository bankAccountRepository;

    @Autowired
    public BankAccountServiceClass(BankAccountRepository bankAccountRepository) {
        this.bankAccountRepository = bankAccountRepository;
    }

    @Override
    public BankAccount createBankAccount(BankAccount bankAccount) {
        return bankAccountRepository.save(bankAccount);
    }

    @Override
    public BankAccount getBankAccountByPhoneNumber(String phoneNumber) {
        return bankAccountRepository.findByPhone(phoneNumber);
    }
}
