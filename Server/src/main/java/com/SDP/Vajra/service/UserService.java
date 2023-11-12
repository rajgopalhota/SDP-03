package com.SDP.Vajra.service;

import java.util.List;

import com.SDP.Vajra.model.User;

public interface UserService {
	public User registerUser(User r);

	public User findById(Long id);
	
	public User findByPhone(String phone);
	
	public List<User> finadAll();
	
	public User acceptUser(String phone);
	
	public User rejectUser(String phone);

}
