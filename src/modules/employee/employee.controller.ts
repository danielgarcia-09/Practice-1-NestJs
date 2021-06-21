import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReadEmployeeDto } from './dtos/';
import { EmployeeService } from './employee.service';

@Controller('employee')
export class EmployeeController {

    constructor(private readonly _employeeService: EmployeeService) {

    }

    @Post()
    createEmployee( @Body() employee ): Promise<ReadEmployeeDto> {
        return this._employeeService.createEmployee(employee);
    }

    @Get()
    allEmployees(): Promise<ReadEmployeeDto[]>{
        return this._employeeService.allEmployees();
    }
}
