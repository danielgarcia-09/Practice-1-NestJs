import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Department } from './department.entity';
import { DepartmentRepository } from './department.repository';
import { ReadDepartmentDto, DepartmentDto } from './dtos';

@Injectable()
export class DepartmentService {
    constructor(private readonly _departmentRepository: DepartmentRepository) {}

    async createDepartment(department: Partial<DepartmentDto>): Promise<ReadDepartmentDto>{
        const createdDepart: Department = await this._departmentRepository.save({
            name: department.name,
            description: department.description,
        });
        return plainToClass(ReadDepartmentDto,createdDepart);
    }

    async allDepartments(): Promise<ReadDepartmentDto[]> {
        const departments: Department[] = await this._departmentRepository.find();
        return plainToClass(ReadDepartmentDto, departments);
    }
}
