package com.SDP.Vajra.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.SDP.Vajra.model.BankAccount;
import com.SDP.Vajra.model.User;
import com.SDP.Vajra.repository.BankAccountRepository;
import com.SDP.Vajra.repository.UserRespository;

@Service
public class BankAccountServiceClass implements BankAccountService {

    private BankAccountRepository bankAccountRepository;
    private UserRespository userRepository; 

    @Autowired
    public BankAccountServiceClass(BankAccountRepository bankAccountRepository, UserRespository userRepository) {
    	super();
    	this.bankAccountRepository = bankAccountRepository;
    	this.userRepository = userRepository;
    }
  
    @Override
    public BankAccount createBankAccount(BankAccount bankAccount, Long userId) {
    	 User user = userRepository.findById(userId).orElseThrow(() -> new RuntimeException("User not found"));
         bankAccount.setUser(user);
         return bankAccountRepository.save(bankAccount);
    }


	@Override
    public BankAccount getBankAccountByPhoneNumber(String phoneNumber) {
        return bankAccountRepository.findByPhone(phoneNumber);
    }
    @Override
    public BankAccount updateBankAccount(BankAccount bankAccount) {
        return bankAccountRepository.save(bankAccount);
    }


}
