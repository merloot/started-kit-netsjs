import { Module } from '@nestjs/common';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { MessagingService } from '../messaging/messaging.service';
import { MessagingController } from '../messaging/messaging.controller';
import {rabbitConfig} from '../config'

@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule, {
      exchanges: [
        {
          name: 'exchange1',
          type: 'topic',
        },
      ],
      uri: rabbitConfig().url,
      enableControllerDiscovery: true,
    }),
  ],
  providers: [MessagingService, MessagingController],
  controllers: [MessagingController],
})
export class RabbitModule {}
