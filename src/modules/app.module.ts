import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { SystemConfigModule } from './system-config.module';
import { DatabaseModule } from './database.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlanLogEntity } from 'src/entities/plan-log.entity';

@Module({
  imports: [
    SystemConfigModule,
    HttpModule,
    DatabaseModule,
    TypeOrmModule.forFeature([PlanLogEntity]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
