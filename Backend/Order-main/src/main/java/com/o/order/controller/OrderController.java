package com.o.order.controller;

import java.util.List;
import java.util.Map;
import java.util.TreeMap;
import java.util.Map.Entry;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.o.order.entity.PaytmDetailPojo;
import com.paytm.pg.merchant.PaytmChecksum;


import com.o.order.entity.Order;
import com.o.order.repository.OrderRepository;
import com.o.order.service.OrderService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:4200/")
public class OrderController{
	
	public static String  x;
	public static String  y;
	public static String  z;
	@Autowired
	private OrderService orderRepository;    //Service
	@Autowired
	private PaytmDetailPojo paytmDetailPojo;
	@Autowired
	private OrderRepository repository;
	
	@Autowired
	private PaymentController pm; 
	
	@GetMapping("/get")  
	public List<Order> getAllBooks()   
	{  
	return orderRepository.getAllBooks();  
	}  
	//creating a get mapping that retrieves the detail of a specific user  
	@GetMapping("/get/{userId}")  
	public List<Order> getBooks(@PathVariable("userId") String userId)   
	{  
	return orderRepository.getBooksById(userId);  
	}  
	
	@GetMapping("/{orderId}")
	public Order getOrderById(@PathVariable("orderId") String orderId) {
		return repository.findByOrderId(orderId);
	}
	
	@GetMapping("/s/{status}")
	List<Order> getOrderByStatus(@PathVariable("status") String status){
		return repository.findByStatus(status);
	}
	
	//creating a delete mapping that deletes a specified book  
	@DeleteMapping("/delete/{userId}")  
	public void deleteBook(@PathVariable("userId") String bookid)   
	{  
		orderRepository.delete(bookid);  
	}  
	
	//creating post mapping that post the user detail in the database  
	@PostMapping("/post")  
	public Order saveBook(@RequestBody Order books)   throws Exception
	{  
		orderRepository.saveOrUpdate(books);  
//		String x=books.getOrderId();
//		String y=books.getUserId();
//		double z=books.getTotal();
//		return pm.getRedirect(x,y,z) ;
		return books;
	}  
	
	//creating put mapping that updates the user    
	@PutMapping("/put/{orderId}")  
	public Order update(@RequestBody Order books)   
	{  
		orderRepository.saveOrUpdate(books);  
	return books;  
	}  
	 @PostMapping("/pgresponse")
	    public String getResponseRedirect(HttpServletRequest request, Model model) {

	        Map<String, String[]> mapData = request.getParameterMap();
	        TreeMap<String, String> parameters = new TreeMap<String, String>();
	        String paytmChecksum = "";
	        for (Entry<String, String[]> requestParamsEntry : mapData.entrySet()) {
	            if (" ".equalsIgnoreCase(requestParamsEntry.getKey())){
	                paytmChecksum = requestParamsEntry.getValue()[0];
	            } else {
	            	parameters.put(requestParamsEntry.getKey(), requestParamsEntry.getValue()[0]);
	            }
	        }
	        String result;

	        boolean isValideChecksum = false;
	        System.out.println("RESULT : "+parameters.toString());
	        try {
	            isValideChecksum = validateCheckSum(parameters, paytmChecksum);
	            if (isValideChecksum && parameters.containsKey("RESPCODE")) {
	                if (parameters.get("RESPCODE").equals("01")) {
	                    result = "Payment Successful";
	                } else {
	                    result = "Payment Failed";
	                }
	            } else {
	                result = "Checksum mismatched";
	            }
	        } catch (Exception e) {
	            result = e.toString();
	        }
	        model.addAttribute("result",result);
	        parameters.remove("CHECKSUMHASH");
	        model.addAttribute("parameters",parameters);
	        return "report";
	    }

	    private boolean validateCheckSum(TreeMap<String, String> parameters, String paytmChecksum) throws Exception {
	        return PaytmChecksum.verifySignature(parameters,
	                paytmDetailPojo.getMerchantKey(), paytmChecksum);
	    }
	private String getCheckSum(TreeMap<String, String> parameters) throws Exception {
		return PaytmChecksum.generateSignature(parameters, paytmDetailPojo.getMerchantKey());
	}
	
	@PutMapping("/{id}")
	public Order updateOrderDetails(@RequestBody Order order, @PathVariable("id") String orderId) {
		
		return orderRepository.updateOrderDetails(order);
		
	}
	
	 
}
