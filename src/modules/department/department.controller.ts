import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReadDepartmentDto } from './dtos';
import { DepartmentService } from './department.service';

@Controller('department')
export class DepartmentController {

    constructor( private readonly _departmentService: DepartmentService ) {}

    @Get()
    getDepartments(): Promise<ReadDepartmentDto[]> {
        return this._departmentService.allDepartments();
    }

    @Post()
    createDepartment(@Body() department): Promise<ReadDepartmentDto> {
        return this._departmentService.createDepartment(department);
    }
}
