import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { EmployeeDto, ReadEmployeeDto } from './dtos/';
import { Employee } from './employee.entity';
import { EmployeeRepository } from './employee.repository';

@Injectable()
export class EmployeeService {
    constructor(private readonly _employeeRepository: EmployeeRepository){}

    async createEmployee(employee: Partial<EmployeeDto>): Promise<ReadEmployeeDto>{
        const savedEmployee: Employee = await this._employeeRepository.save({
            firstName: employee.firstName,
            lastName: employee.lastName,
            age: employee.age,
            isWorking: employee.isWorking
        });
        return plainToClass(ReadEmployeeDto,savedEmployee);
    }

    async allEmployees(): Promise<ReadEmployeeDto[]> {
        const employees: Employee[] = await this._employeeRepository.find();

        return plainToClass(ReadEmployeeDto,employees);
    }
}

