package com.drugs.controller;

import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drugs.exception.CustomException;
import com.drugs.models.Cart;
import com.drugs.service.CartService;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")
@RequestMapping("/drugs/cart")
public class CartController {
	@Autowired
	private CartService cartService;
	
	
	@PostMapping("/")
	public ResponseEntity<?> addCart(@RequestBody Cart cart) throws CustomException, Exception {
		return cartService.addUser(cart);
	}
	
	@GetMapping("/details")
	public List<Cart> getAllCartDetails(){
		return this.cartService.getAllUsers();
	}
	
//	Get By Cart Id
	@GetMapping("/{id}")
	public List<Cart> getCartByCartId(@PathVariable("id") String cartId){
		return this.cartService.getCartByCartId(cartId);
	}
	
	
////	Get by DrugsId
//	@GetMapping("/drugs/{id}")
//	public List<Cart> getCartByDrugsId(@PathVariable("id") String drugsId){
//		return this.cartService.getCartByDrugsId(drugsId);
//	}
//	
	@GetMapping("/username/{username}")
	public List<Cart> getAllUserName(@PathVariable("username")  String username){
		return this.cartService.getByUserName(username);
		
	}
	
	@GetMapping("/username/{id}/{username}")
	public Cart getCartByDrugsIdAndUsername(@PathVariable("username")  String username, @PathVariable("id") String drugsId){
		return this.cartService.getByUserNameAndDrugsId(drugsId, username);
		
	}
	
//	@PutMapping("/username/{id}/{username}")
//	public Cart updateCartByDrugsQty(@RequestBody Cart cart, @PathVariable("username") String username, @PathVariable("id") String drugsId) {
//		
//		return this.cartService.updateCartQty(cart, username);
//		
//	}
	
	@PutMapping("/{id}")
	public Cart updateCartQty(@RequestBody Cart cart, @PathVariable("id") String cartId) {
		return this.cartService.updateCartQty(cart);
	
	}
	
	@DeleteMapping("/{username}")
	public String deleteDrugs(@PathVariable("username") String username) {
		
		return this.cartService.deleteCartsByUsername(username);
	}

}
