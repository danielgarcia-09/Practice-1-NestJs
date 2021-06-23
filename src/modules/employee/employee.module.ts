import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeRepository } from './employee.repository';
import { DepartmentRepository } from '../department/department.repository';
import { PassportModule } from '@nestjs/passport';
import { ConfigService } from '../../config/config.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([EmployeeRepository, DepartmentRepository]),PassportModule.register({
    defaultStrategy: 'jwt'
  })],
  providers: [EmployeeService, ConfigService],
  controllers: [EmployeeController]
})
export class EmployeeModule {}
