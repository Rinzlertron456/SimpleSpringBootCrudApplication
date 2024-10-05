package com.springboot.server.controller;

import com.springboot.server.model.Employee;
import com.springboot.server.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000")
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
