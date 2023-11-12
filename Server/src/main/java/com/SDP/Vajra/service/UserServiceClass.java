package com.SDP.Vajra.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.SDP.Vajra.model.User;
import com.SDP.Vajra.repository.UserRespository;

@Service
public class UserServiceClass implements UserService {

	UserRespository rs;

	public UserServiceClass() {
	}

	@Autowired
	public UserServiceClass(UserRespository rs) {
		this.rs = rs;
	}

	@Override
	public User registerUser(User r) {
		return rs.save(r);
	}

	@Override
	public User findById(Long imageId) {
		try {
			// Use the RegisterRepository to retrieve the Register entity by its ID
			Optional<User> optionalRegister = rs.findById(imageId);
			if (optionalRegister.isPresent()) {
				return optionalRegister.get();
			} else {
				// Handle the case where the image with the provided ID is not found
				// You can throw an exception or return null, depending on your use case
				return null; // For this example, we return null if not found
			}
		} catch (Exception e) {
			// Handle any exceptions (e.g., database access error)
			e.printStackTrace();
			return null; // Return null in case of an exception
		}
	}

	@Override
	public User findByPhone(String phone) {
		try {
			User user = rs.findByPhone(phone);
			if (user != null) {
				return user;
			} else {
				return null; // For this example, we return null if not found
			}
		} catch (Exception e) {
			e.printStackTrace();
			return null; // Return null in case of an exception
		}
	}

	@Override
	public List<User> finadAll() {
		try {
			return rs.findAll();
		} catch (Exception e) {
			return new ArrayList<>();
		}
	}

	@Override
	public User acceptUser(String phone) {
		User user = rs.findByPhone(phone);
		if (user != null) {
			user.setVerified(true);
			return rs.save(user);
		} else {
			// Handle the case where the user with the given phone is not found
			return null;
		}
	}

	@Override
	public User rejectUser(String phone) {
		User user = rs.findByPhone(phone);
		if (user != null) {
			rs.delete(user);
			return user;
		} else {
			// Handle the case where the user with the given phone is not found
			return null;
		}
	}

}
