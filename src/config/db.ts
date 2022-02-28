import { registerAs } from '@nestjs/config';
import { config as setConfig } from 'dotenv';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

setConfig();
setConfig({ path: '.env' });

export default registerAs('database', (): TypeOrmModuleOptions => {
  return {
    type: 'postgres',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    autoLoadEntities: true,
    // synchronize: process.env.MODE === "dev",
    entities: ['src/**/*.entity.ts'],
    migrations: ['src/migrations/*{.ts,.js}'],
    cli: {
      migrationsDir: 'src/migrations',
    },
  };
});
