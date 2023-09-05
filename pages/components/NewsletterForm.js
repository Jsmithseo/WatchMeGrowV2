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
    <div className="newsletter">

      <style jsx>
        {`

        .newsletter {
          margin: 0;
          display: flex;
          justify-content: center; 
        }
        `}
      </style>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
      <Input
          type="name"
          name="name"
          id="name"
          placeholder="Enter your full name"
        />
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
    </div>
  );
}

export default NewsletterForm;
