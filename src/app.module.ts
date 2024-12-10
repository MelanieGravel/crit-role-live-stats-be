import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiController } from './api/api.controller';
import { EventsGateway } from './events/events.gateway';

@Module({
  imports: [],
  controllers: [AppController, ApiController],
  providers: [AppService, EventsGateway],
})
export class AppModule {}
