package com.o.order.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.o.order.entity.Address;


@Repository
public interface AddressRepository extends MongoRepository<Address, String>{

	boolean existsByUsername(String username);

}
