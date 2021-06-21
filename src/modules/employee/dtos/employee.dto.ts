import { IsNotEmpty } from "class-validator";

export class EmployeeDto {

    @IsNotEmpty()
    firstName: string;

    @IsNotEmpty()
    lastName: string;

    @IsNotEmpty()
    age: number;

    @IsNotEmpty()
    isWorking: boolean;
}