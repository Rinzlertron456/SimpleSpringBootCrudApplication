package com.springboot.server.controller;

import com.springboot.server.model.Employee;
import com.springboot.server.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployeeController {

    @Autowired
    private EmployeeRepository empRepo;

    @PostMapping("/employee")
    Employee employee(@RequestBody Employee employee){
        return empRepo.save(employee);
    }

    @GetMapping("/employees")
    List<Employee> getEmployees(){
        return empRepo.findAll();
    }
}
