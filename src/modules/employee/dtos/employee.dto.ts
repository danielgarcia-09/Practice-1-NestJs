import { IsNotEmpty } from "class-validator";
import { Department } from '../../department/department.entity';

export class EmployeeDto {

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    age: number;

    @IsNotEmpty()
    isWorking: boolean;

    @IsNotEmpty()
    departments: Department[];
}