import { createTransport } from 'nodemailer';

export const email = createTransport({
  host: 'smtp.yandex.ru',
  port: '587',
  secure: false,
  auth: {
    user: Bun.env.SMTP_USER,
    pass: Bun.env.SMTP_PASS,
  },
});

export const sendEmail = async (to: string, subject: string, text: string) => {
  await email.sendMail({
    from: Bun.env.SMTP_USER,
    to,
    subject,
    text,
  });
};

export const sendOTP = async (to: string, otp: string) => {
  try {
    await email.sendMail({
      from: Bun.env.SMTP_USER,
      to,
      subject: 'Your OTP Code',
      text: `Your OTP code is ${otp}`,
    });
  } catch (error) {
    console.error(error);
  }
};
