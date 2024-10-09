package com.springboot.server.controller;

import com.springboot.server.exception.EmployeeNotFoundException;
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

    @GetMapping("/employee/{id}")
    Employee getEmployeeById(@PathVariable Long id){
        return empRepo.findById(id).orElseThrow(()->new EmployeeNotFoundException(id));
    }

    @PutMapping("/employee/{id}")
    Employee updateEmployee(@RequestBody Employee newEmployee, @PathVariable Long id){
        return empRepo.findById(id).map(employee -> {
            employee.setId(newEmployee.getId());
            employee.setName(newEmployee.getName());
            employee.setDesignation(newEmployee.getDesignation());
            employee.setDomain(newEmployee.getDomain());
            employee.setExperience(newEmployee.getExperience());
            employee.setManager(newEmployee.getManager());
            return empRepo.save(employee);
        }).orElseThrow(()->new EmployeeNotFoundException(id));
    }

    @DeleteMapping("/employee/{id}")
    String deleteEmployee(@PathVariable Long id){
        if(!empRepo.existsById(id)){
            throw new EmployeeNotFoundException(id);
        }
        empRepo.deleteById(id);
        return "Employee ID "+id+" is relieved from the organization";
    }
}
