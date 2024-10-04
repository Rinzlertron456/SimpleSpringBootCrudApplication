package com.springboot.server.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Employee {

    @Id
    @GeneratedValue
    private Long empId;
    private String empName;
    private String empProfile;
    private String empDomain;
    private Float empExperience;
    private String empManager;

    public Long getEmpId() {
        return empId;
    }

    public void setEmpId(Long empId) {
        this.empId = empId;
    }

    public String getEmpName() {
        return empName;
    }

    public void setEmpName(String empName) {
        this.empName = empName;
    }

    public String getEmpProfile() {
        return empProfile;
    }

    public void setEmpProfile(String empProfile) {
        this.empProfile = empProfile;
    }

    public String getEmpDomain() {
        return empDomain;
    }

    public void setEmpDomain(String empDomain) {
        this.empDomain = empDomain;
    }

    public Float getEmpExperience() {
        return empExperience;
    }

    public void setEmpExperience(Float empExperience) {
        this.empExperience = empExperience;
    }

    public String getEmpManager() {
        return empManager;
    }

    public void setEmpManager(String empManager) {
        this.empManager = empManager;
    }
}
