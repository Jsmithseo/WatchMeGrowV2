// components/RegisterChildcare.js

import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const RegisterChildcare = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    childName: '',
    childAge: '',
    contactNumber: '',
    email: '',
    specialRequirements: '',
    // Add other fields as needed
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(`Form submitted:`, formData);

    const response = await fetch('./api/sendMailChildcare', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      console.log('Email sent successfully');
      window.location.href = '/thankyouchildcare';
    } else {
      console.error('Error sending email');
    }

    setFormData({
      name: '',
      email: '',
      phone: '',
      interest: '',
      description: '',
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for="parentName">Parent/Guardian Name</Label>
        <Input
          type="text"
          name="parentName"
          id="parentName"
          placeholder="Enter name"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="childName">Child's Name</Label>
        <Input
          type="text"
          name="childName"
          id="childName"
          placeholder="Enter child's name"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="childAge">Child's Age</Label>
        <Input
          type="number"
          name="childAge"
          id="childAge"
          placeholder="Enter child's age"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="contactNumber">Contact Number</Label>
        <Input
          type="tel"
          name="contactNumber"
          id="contactNumber"
          placeholder="Enter contact number"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="email">Email</Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Enter email"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="specialRequirements">Special Requirements/Notes</Label>
        <Input
          type="textarea"
          name="specialRequirements"
          id="specialRequirements"
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit" color="primary">
        Register
      </Button>
    </Form>
  );
};

export default RegisterChildcare;
