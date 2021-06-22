import { Body, Controller, Get, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { ReadDepartmentDto } from './dtos';
import { DepartmentService } from './department.service';
import { Param } from '@nestjs/common';

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

    @Patch('/:id')
    updateDescription(@Param('id',ParseIntPipe) id: number, @Body() description ): Promise<Boolean> {
        return this._departmentService.updateDescription(id, description);
    }
}
