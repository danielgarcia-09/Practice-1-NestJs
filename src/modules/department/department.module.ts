import { Module } from '@nestjs/common';
import { DepartmentService } from './department.service';
import { DepartmentController } from './department.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentRepository } from './department.repository';

@Module({
  imports: [TypeOrmModule.forFeature([DepartmentRepository])],
  providers: [DepartmentService],
  controllers: [DepartmentController]
})
export class DepartmentModule {}
