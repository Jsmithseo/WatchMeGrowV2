import React from 'react';
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap';

function NewsletterForm() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {};
    formData.forEach((value, key) => (data[key] = value));

    const response = await fetch('./api/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (response.status === 200) {
      console.log('Email sent successfully');
      window.location.href = '/thankyou';
    } else {
      console.error('Error sending email');
    }
  };

  return (
      <Form  inline onSubmit={handleSubmit} style={{display: "inline-flex"}}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Input
            type="name"
            name="name"
            id="name"
            placeholder="Enter your full name"
          />
        </FormGroup>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">

          <Input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
        </FormGroup>

        <Button type="submit" color="primary">
          Submit
        </Button>
      </Form>
  );
}

export default NewsletterForm;
