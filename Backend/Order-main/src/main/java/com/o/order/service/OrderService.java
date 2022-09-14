package com.o.order.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.o.order.entity.Drugs;
import com.o.order.entity.Order;
import com.o.order.repository.OrderRepository;

@Service
public class OrderService {
	@Autowired
	private OrderRepository orderRepository;
	
	//getting all books record by using the method findaAll() of CrudRepository  
	public List<Order> getAllBooks()   
	{  
	List<Order> books = new ArrayList<Order>();  
	orderRepository.findAll().forEach(books1 -> books.add(books1));  
	return books;  
	}  
	
	//getting a specific record by using the method findById() of CrudRepository  
	public List<Order> getBooksById(String userId)   
	{  
		List<Order> books = new ArrayList<Order>();  
	return  orderRepository.findByUserId(userId);
	
	}  
	
	//saving a specific record by using the method save() of CrudRepository  
	public Order saveOrUpdate(Order books)   
	{  
		orderRepository.save(books); 
		return books;
	} 
	
	//deleting a specific record by using the method deleteById() of CrudRepository  
	public void delete(String userId)   
	{  
		orderRepository.deleteById(userId);  
	}  
	
	//updating a record  
	public void update(Order books, String userId)   
	{  
		orderRepository.save(books);  
	} 
	
	public List<Order> getOrderByStatus(String status){
		return orderRepository.findByStatus(status);
	}
	
	
	public Order updateOrderDetails(Order supplier) {
		return orderRepository.save(supplier);
	}
	

}
