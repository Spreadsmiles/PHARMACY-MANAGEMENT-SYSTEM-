package com.supplier.controller;

import java.util.List;
import java.util.Optional;

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

import com.supplier.model.Supplier;
import com.supplier.service.SupplierService;



@RestController
@RequestMapping("/supplier")
@CrossOrigin(origins = "http://localhost:4200")
public class SupplierController {
	
	@Autowired
	private SupplierService supplierService;
	
	@PostMapping("/")
	public Supplier saveDepartment(@RequestBody Supplier supplier) {
		return supplierService.saveDepartment(supplier);
	}
	
	@GetMapping("/list")
	public List<Supplier> getDetails(){
		return supplierService.getAllDetails();
	}
	
	@GetMapping("/{id}")
	public Optional<Supplier> getDepartmentById(@PathVariable("id") String supplierId){
		return supplierService.getDepartmentByID(supplierId);
	}
	

	@PutMapping("/{id}")
	public Supplier updateSupplierDeytails(@RequestBody Supplier supplier, @PathVariable("id") String supplierId) {
		return supplierService.updateSupplierDetails(supplier, supplierId);
	}
	
	@DeleteMapping("/{id}")
	public String deleteSupplier(@PathVariable("id") String supplierId) {
		
		return supplierService.deleteSupplier(supplierId);
		
		
	}



}
