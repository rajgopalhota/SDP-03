package com.SDP.Vajra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.SDP.Vajra.model.AccountTransaction;
import com.SDP.Vajra.model.BankAccount;
import com.SDP.Vajra.service.BankAccountService;
import com.SDP.Vajra.service.AccountTransactionService;

@CrossOrigin("http://localhost:3000")
@RestController
public class TransactionController {

    private BankAccountService bankAccountService;
    private AccountTransactionService transactionService;

    @Autowired
    public TransactionController(BankAccountService bankAccountService, AccountTransactionService transactionService) {
        this.bankAccountService = bankAccountService;
        this.transactionService = transactionService;
    }

    @PostMapping("/makeTransaction")
    public ResponseEntity<String> makeTransaction(@RequestBody AccountTransaction transactionRequest) {
        try {
            BankAccount senderAccount = bankAccountService.getBankAccountByPhoneNumber(transactionRequest.getSenderAccount());
            BankAccount receiverAccount = bankAccountService.getBankAccountByPhoneNumber(transactionRequest.getReceiverAccount());

            double transactionAmount = transactionRequest.getAmount();
            if (senderAccount.getBalance() < transactionAmount) {
                return ResponseEntity.badRequest().body("Insufficient balance for the transaction.");
            }

            // Update sender's and receiver's balances
            senderAccount.setBalance(senderAccount.getBalance() - transactionAmount);
            receiverAccount.setBalance(receiverAccount.getBalance() + transactionAmount);

            // Save the updated bank accounts
            bankAccountService.updateBankAccount(senderAccount);
            bankAccountService.updateBankAccount(receiverAccount);

            // Create a transaction record
            AccountTransaction transaction = new AccountTransaction();
            transaction.setFromAccount(senderAccount.getPhoneNumber());
            transaction.setToAccount(receiverAccount.getPhoneNumber());
            transaction.setAmount(transactionAmount);
            transaction.setTransactionDateTime("NA");
            transaction.setMessage(transactionRequest.getMessage());

            // Save the transaction
            transactionService.saveTransaction(transaction);

            return ResponseEntity.ok("Transaction successful.");
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.internalServerError().body("Transaction failed.");
        }
    }
}
