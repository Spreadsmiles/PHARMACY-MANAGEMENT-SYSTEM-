package com.supplier.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.supplier.model.Supplier;
import com.supplier.repository.SupplierRepository;

@Service
public class SupplierService {
	@Autowired
	private SupplierRepository supplierRepository;
	
	public Supplier saveDepartment(Supplier supplier) {
		return supplierRepository.save(supplier);
	}
	
	public List<Supplier> getAllDetails() {
		return supplierRepository.findAll();
	}
	
	public Optional<Supplier> getDepartmentByID(String supplierId) {
		
		return supplierRepository.findById(supplierId);
		
	}

	public Supplier updateSupplierDetails(Supplier supplier, String supplierId) {
		supplier.setSupplierId(supplierId);
		supplier.setSupplierName(supplier.getSupplierName());
		supplier.setEmail(supplier.getEmail());
		supplier.setAvailableDrugs(supplier.getAvailableDrugs());
		return supplierRepository.save(supplier);
	}

	public String deleteSupplier(String supplierId) {
		supplierRepository.deleteById(supplierId);
		return "Deleted Successfully";
		
	}
}
