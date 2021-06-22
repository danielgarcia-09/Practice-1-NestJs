import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { EmployeeDto, ReadEmployeeDto } from './dtos/';
import { Employee } from './employee.entity';
import { EmployeeRepository } from './employee.repository';
import { Department } from '../department/department.entity';
import { DepartmentRepository } from '../department/department.repository';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class EmployeeService {
    constructor(
        private readonly _employeeRepository: EmployeeRepository,
        @InjectRepository(Department)
        private readonly _departmentRepository: DepartmentRepository,
    ) {}

    async createEmployee(employee: Partial<EmployeeDto>): Promise<ReadEmployeeDto>{

        const departments: Department[] = [];

        if(!employee){
            throw new BadRequestException('Wrong type of employee');
        }

        for(const departmentId of employee.departments){
            const departmentExists = await this._departmentRepository.findOne(departmentId);

            if(!departmentExists){
                throw new NotFoundException('Department not found');
            }

            departments.push(departmentExists);
        }


        const savedEmployee: Employee = await this._employeeRepository.save({
            firstName: employee.firstName,
            lastName: employee.lastName,
            age: employee.age,
            isWorking: employee.isWorking,
            departments: departments,
        });
        return plainToClass(ReadEmployeeDto,savedEmployee);
    }

    async allEmployees(): Promise<ReadEmployeeDto[]> {
        const employees: Employee[] = await this._employeeRepository.find();

        return plainToClass(ReadEmployeeDto,employees);
    }
}

