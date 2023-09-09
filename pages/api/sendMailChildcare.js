import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const {
      parentName,
      email,
      childName,
      childAge,
      contactNumber,
      specialRequirements,
    } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'Jeremysmithseo@gmail.com',
        pass: 'rjuabcwfiwqgvsyf',
      },
    });

    try {
      const emailRes = await transporter.sendMail({
        from: email,
        to: 'Jeremysmithseo@gmail.com',
        subject: `Childcare sign-up from ${parentName}`,
        text: `${email} ${parentName} ${childName} ${childAge} ${contactNumber} ${specialRequirements}`,
      });

      return res.status(200).send({ done: true });
    } catch (err) {
      return res.status(500).send({ error: 'Failed to send email.' });
    }
  }

  return res.status(404).send();
};
