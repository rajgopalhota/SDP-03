package com.SDP.Vajra.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import java.util.*;

import com.SDP.Vajra.model.BankAccount;
import com.SDP.Vajra.model.Card;
import com.SDP.Vajra.model.User;
import com.SDP.Vajra.service.BankAccountService;
import com.SDP.Vajra.service.UserService;

@CrossOrigin("*")
@RestController
public class UserRest {
	UserService rss;

	@Autowired
	JavaMailSender mail;

	@Autowired
	private BankAccountService bankAccountService;

	@Autowired
	public UserRest(UserService rss) {
		super();
		this.rss = rss;
	}
	
	public static String generateRandomPin() {
        int minDigit = 0;
        int maxDigit = 9;

        StringBuilder pinBuilder = new StringBuilder();

        Random random = new Random();

        for (int i = 0; i < 4; i++) {
            // Generate a random digit in the specified range
            int randomDigit = random.nextInt((maxDigit - minDigit) + 1) + minDigit;

            // Append the digit to the PIN
            pinBuilder.append(randomDigit);
        }

        return pinBuilder.toString();
    }
	
	@PostMapping("/reg")
	public ResponseEntity<User> registerUserVajra(@RequestPart("imagePath") MultipartFile imagePath,
			@RequestPart("signaturePath") MultipartFile signaturePath, @RequestPart("firstName") String firstName,
			@RequestPart("lastName") String lastName, @RequestPart("email") String email,
			@RequestPart("phone") String phone, @RequestPart("password") String password,
			@RequestPart("gender") String gender, @RequestPart("aadharNumber") String aadharNumber,
			@RequestPart("panNumber") String panNumber, @RequestPart("timeCreation") String timeCreation) {
		try {
			User user = rss.findByPhone(phone);

			if (user != null) {
				if (user.getPassword().equals(password)) {
					return new ResponseEntity<>(null, HttpStatus.NO_CONTENT);
				} else {
					return new ResponseEntity<>(user, HttpStatus.OK);
				}
			} else {
//				SimpleMailMessage smm=new SimpleMailMessage();
//				smm.setFrom("rajgopalhotanrg@gmail.com");
//				smm.setTo(email);
//				smm.setSubject("hello");
//				smm.setText("hello 2");
//				mail.send(smm);
				String mpin = generateRandomPin();
				User register = new User();
				register.setFirstName(firstName);
				register.setLastName(lastName);
				register.setEmail(email);
				register.setPhone(phone);
				register.setPassword(password);
				register.setGender(gender);
				register.setAadharNumber(aadharNumber);
				register.setPanNumber(panNumber);
				register.setMpin(mpin);
				byte[] decodedImagePath = imagePath.getBytes();
				byte[] decodedSignaturePath = signaturePath.getBytes();
				register.setImagePath(decodedImagePath);
				register.setSignaturePath(decodedSignaturePath);

				// Register the user
				User registeredUser = rss.registerUser(register);

				// Create a new bank account for the user
				BankAccount bankAccount = new BankAccount();
				bankAccount.setPhoneNumber(phone);
				bankAccount.setBalance(5000.0); // Default balance of 5000
				bankAccount.setCreationDate(timeCreation); // Default creation date

				// Register the bank account
				BankAccount registeredBankAccount = bankAccountService.createBankAccount(bankAccount);

				return new ResponseEntity<>(registeredUser, HttpStatus.OK);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@PostMapping("/login")
	public ResponseEntity<User> loginUser(@RequestPart("phone") String phone,
			@RequestPart("password") String password) {
		try {
			User user = rss.findByPhone(phone);

			if (user != null) {
				if (user.getPassword().equals(password)) {
					return new ResponseEntity<>(user, HttpStatus.OK);
				} else {
					return new ResponseEntity<>(null, HttpStatusCode.valueOf(204));
				}
			} else {
				return new ResponseEntity<>(null, HttpStatusCode.valueOf(204));
			}
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

	@GetMapping("/images/{phonenumber}/{imageType}")
	public ResponseEntity<byte[]> getImage(@PathVariable String phonenumber, @PathVariable String imageType) {
		try {
			User user = (User) rss.findByPhone(phonenumber);

			if (user != null) {
				byte[] imageData = null;
				if ("photo".equals(imageType) && user.getImagePath() != null) {
					imageData = user.getImagePath();
				} else if ("signature".equals(imageType) && user.getSignaturePath() != null) {
					imageData = user.getSignaturePath();
				}

				if (imageData != null) {
					return new ResponseEntity<>(imageData, HttpStatus.OK);
				}
			}
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		} catch (Exception e) {
			e.printStackTrace();
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	@GetMapping("/getallusers")
	public ResponseEntity<List<User>> getAllUsers() {
		try {
			List<User> users = rss.finadAll();
			return new ResponseEntity<>(users, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}

}
