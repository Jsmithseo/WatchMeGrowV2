import nodemailer from 'nodemailer';


export default async (req, res) => {
  if (req.method === 'POST') {

    const { email, name, phone , interest, description  } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'Jeremysmithseo@gmail.com',
        pass: 'rjuabcwfiwqgvsyf'
      },
    });

    try {
      const emailRes = await transporter.sendMailVolunteer({
        from: email,
        to: 'Jeremysmithseo@gmail.com',
        subject: `New contact from ${email}`,
        text: email,
        text: name,
        tel: phone,
        text: interest, 
        text: description

      });

      return res.status(200).send({ done: true });
      
    } catch (err) {
      return res.status(500).send({ error: 'Failed to send email.' });
    }
  }

  return res.status(404).send();
};
