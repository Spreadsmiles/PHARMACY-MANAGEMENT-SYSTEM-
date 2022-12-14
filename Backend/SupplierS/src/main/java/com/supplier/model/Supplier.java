package com.supplier.model;

import java.util.List;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Document(collection="supplier")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Supplier {
	@Id
	private String supplierId;
	private String supplierName;
	private String email;
	private String availableDrugs;
	
}
