package com.SDP.Vajra.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.SDP.Vajra.model.User;

@Repository
public interface UserRespository extends JpaRepository<User, String> {
	
}