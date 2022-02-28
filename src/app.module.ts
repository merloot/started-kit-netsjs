import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { dbConfig } from './config';
import { RabbitModule } from './rabbit/rabbit.module';
import { MessagingModule } from './messaging/messaging.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [dbConfig],
    }),
    TypeOrmModule.forRoot(dbConfig()),
    RabbitModule,
    MessagingModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
