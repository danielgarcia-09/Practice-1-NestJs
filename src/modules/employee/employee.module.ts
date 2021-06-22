import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { DepartmentRepository } from '../department/department.repository';

@Module({
  imports: [TypeOrmModule.forFeature([EmployeeRepository, DepartmentRepository])],
  providers: [EmployeeService],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
