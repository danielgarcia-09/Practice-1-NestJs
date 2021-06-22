import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
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

    async updateDescription( departmentId: number, newDescription: Partial<DepartmentDto> ): Promise<Boolean> {
        if(!departmentId){
            throw new BadRequestException('ID does not exist');
        }

        if(!newDescription){
            throw new BadRequestException('Description was not given');
        }

        const updatedDepartment = await this._departmentRepository.update(departmentId,{
            description: newDescription.description
        });

        if(!updatedDepartment){
            throw new NotFoundException('No department was found');
        }

        return true;
    }
}
