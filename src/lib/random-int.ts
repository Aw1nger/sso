import { randomInt } from 'node:crypto';

/* Generates a random OTP (One-Time Password) of 6 digits
 * @returns {string} The generated OTP
 */
export function getOTP(): string {
  let code = '';
  for (let i = 0; i < 6; i++) {
    code += randomInt(0, 9).toString();
  }

  console.log(code);
  return code;
}
