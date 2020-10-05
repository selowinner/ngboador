import { MiddlewareModule } from './common/middleware/middleware.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './admin/admin/admin.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './client/users/users.module';
import { TimelinesModule } from './client/timelines/timelines.module';

@Module({
  imports: [
        MiddlewareModule, 
    TypeOrmModule.forRoot(),
    AdminModule,
    UsersModule,
    TimelinesModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
  ],
})
export class AppModule {}
