// components/RegisterProvider.js

import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const RegisterProvider = () => {
  const [formData, setFormData] = useState({
    providerName: '',
    qualifications: '',
    yearsExperience: '',
    contactNumber: '',
    email: '',
    availability: '',
    references: '',
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

    const response = await fetch('./api/sendMailProvider', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    if (response.status === 200) {
      console.log('Email sent successfully');
      window.location.href = '/thankyou';
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
        <Label for="providerName">Provider's Name</Label>
        <Input
          type="text"
          name="providerName"
          id="providerName"
          placeholder="Enter your name"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="qualifications">Qualifications</Label>
        <Input
          type="text"
          name="qualifications"
          id="qualifications"
          placeholder="Enter qualifications"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="yearsExperience">Years of Experience</Label>
        <Input
          type="number"
          name="yearsExperience"
          id="yearsExperience"
          placeholder="Enter number of years"
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
        <Label for="availability">Availability</Label>
        <Input
          type="text"
          name="availability"
          id="availability"
          placeholder="E.g., Weekdays, Weekends, Evenings"
          onChange={handleChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label for="references">References (Optional)</Label>
        <Input
          type="textarea"
          name="references"
          id="references"
          placeholder="Please provide any references or past work experiences."
          onChange={handleChange}
        />
      </FormGroup>
      <Button type="submit" color="primary">
        Register as Provider
      </Button>
    </Form>
  );
};

export default RegisterProvider;
