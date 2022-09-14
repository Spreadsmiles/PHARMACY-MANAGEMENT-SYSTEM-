package com.api;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import reactor.core.publisher.Mono;

@RestController
@CrossOrigin(origins = "*")
public class FallbackController {

    @RequestMapping("/securityFallBack")
    public Mono<String> adminServiceFallBack(){
        return Mono.just("signup operations is taking too long to respond or server is down,Please try again");
    }

    @RequestMapping("/DrugsFallBack")
    public Mono<String> userServiceFallBack(){
        return Mono.just("User operations is taking too long to respond or server is down,Please try again");
    }

    @RequestMapping("/orderFallBack")
    public Mono<String> orderServiceFallBack(){
        return Mono.just("order is taking too long to respond or server is down,Please try again");
    }
    @RequestMapping("/SupplierFallBack")
    public Mono<String> suppServiceFallBack(){
        return Mono.just("supplier is taking too long to respond or server is down,Please try again");
    }


    @RequestMapping("/paymentFallBack")
    public Mono<String> paymentServiceFallBack(){
        return Mono.just("Payment Service is taking too long to respond or server is down,please try again");
    }

    

    

    
}