import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { EventsModule } from './events/events.module';
import { SpotsModule } from './spots/spots.module';

@Module({
  imports: [PrismaModule, EventsModule, SpotsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
