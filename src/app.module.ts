import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static'; // New for VueJS client
import { join } from 'path'; // New for VueJS client

import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
      ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..', '../client/dist'),
    }),
    TypeOrmModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
