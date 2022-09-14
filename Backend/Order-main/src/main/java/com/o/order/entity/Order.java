package com.o.order.entity;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Document(collection="Order")
@Data
@NoArgsConstructor
@AllArgsConstructor

public class Order {
	@Id
	private String orderId;
	
	private String userId;
	private List<Cart> cart;
	private String status;
	private double total;
	

}
