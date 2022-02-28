import { registerAs } from '@nestjs/config';

export default registerAs('server', () => {
  return {
    port: process.env.PORT,
    mode: process.env.MODE,
  };
});
